import { ref, computed, watch } from "vue";
import { cloneDeep } from "lodash-es";

export default function useSpeaker(transcriptData, initSpeakers, emit, props) {
  // 说话人弹窗相关状态
  const speakerDialogVisible = ref(false);
  const editSpeakerDialogVisible = ref(false);
  const originSelectedSpeakerId = ref("");
  const selectedSpeakerId = ref("");
  const editingSpeakerId = ref("");
  const editingSpeakerName = ref("");
  const applyToAllMatching = ref(0);
  const speakerPopoverRef = ref(null);
  const speakerPopoverVisible = ref(false);
  const selectedPid = ref(""); // 选中的段落id
  const speakerBtnRef = ref(null);
  const scrollbarRef = ref(null)
  const { isShowSpeaker } = toRefs(props.fileBaseInfo)
  isShowSpeaker.value ??= true
  const speakers = ref(cloneDeep(initSpeakers.value))
  watch(initSpeakers, (newVal) => {
    speakers.value = cloneDeep(newVal)
  }, {
    deep: true
  })
  watch(speakerPopoverVisible, (newVal) => {
    if(newVal){
      setTimeout(() => {
        const wrapRef = scrollbarRef.value?.wrapRef
        if(wrapRef){
          const activeEl = wrapRef.querySelector('.is-active')
          activeEl && activeEl.scrollIntoView({
            block: 'center',
          })
        }
      },10)
    }
  })
  let maxSpeakerId = Math.max(...speakers.value.map(item => item.id))
  // 获取所有唯一的说话人
  const uniqueSpeakers = computed(() => {
    return speakers.value;
  });
  const editAddSpeakersMap = ref({})
  // 说话人映射表
  const uniqueSpeakersMap = computed(() => {
    return speakers.value.reduce((acc, cur) => {
      acc[cur.id] = cur.name;
      return acc;
    }, {});
  });
  const editSpeakerCore = async (data) => {
    const { transcriptApi } = await import("~/api/transcript");
    await transcriptApi.editSpeaker({
      fileId: props.fileBaseInfo.id,
      taskId: props.fileBaseInfo.taskId,
      pid: selectedPid.value,
      applyAll: applyToAllMatching.value,
      ...data,
    });
  }
  // 是否有重复的说话人
  const hasDuplicateSpeakers = computed(() => {
    if (!speakers.value.length) return false;

    // 检查当前选中的说话人count是否大于1
    const currentSpeaker = speakers.value.find(
      (s) => s.id === originSelectedSpeakerId.value
    );
    return currentSpeaker && currentSpeaker.count > 1;
  });

  // 处理说话人popover显示
  const handleSpeakerPopoverShow = (speakerId, pid, isShare) => {
    if(isShare) return
    speakerPopoverVisible.value = true;
    selectedPid.value = pid;
    originSelectedSpeakerId.value = speakerId

    // 检查当前speakerId是否在speakers中存在，如果存在则勾选
    const existingSpeaker = speakers.value.find(
      (s) => s.id === speakerId
    );
    if (existingSpeaker) {
      selectedSpeakerId.value = existingSpeaker.id;
    } else {
      selectedSpeakerId.value = -1
    }
  };

  // 处理说话人popover隐藏
  const handleSpeakerPopoverHide = (outside= false) => {
    // 重置状态
    selectedSpeakerId.value = "";
    originSelectedSpeakerId.value = ''
    applyToAllMatching.value = 0;
    speakerPopoverVisible.value = false;
    selectedPid.value = "";
    if(outside) {
      speakers.value = cloneDeep(initSpeakers.value)
      editAddSpeakersMap.value = {}
    }
  };

  // 确认说话人选择
  const confirmSpeakerSelection = async () => {

    if (selectedSpeakerId.value === '') {
      return handleSpeakerPopoverHide();
    }
    // 获取选中的说话人信息
    let selectedSpeaker = speakers.value.find(
      (s) => s.id === selectedSpeakerId.value
    );

    if (!selectedSpeaker) {
      return handleSpeakerPopoverHide();
    }
    // 原说话人
    const originSpeaker = speakers.value.find(item => item.id === originSelectedSpeakerId.value)
    const targetSpeaker = speakers.value.find(item => item.id === selectedSpeakerId.value)
    if (!applyToAllMatching.value) {
      const obj = editAddSpeakersMap.value[targetSpeaker.id]
      if(obj){
        const tmp = { ...obj }
        tmp.count = 1
        speakers.value.push(tmp)
        selectedSpeakerId.value = tmp.id
        selectedSpeaker = tmp
        originSpeaker.name = tmp.originName
      } else {
        targetSpeaker.count++
      }
      originSpeaker.count--
    } else {
      targetSpeaker.count = targetSpeaker.count + originSpeaker.count
      originSpeaker.count = 0
    }
    const params = {
      sourceSpeakerId: originSelectedSpeakerId.value,
      targetSpeakerId: selectedSpeakerId.value,
      targetSpeaker: selectedSpeaker.name,
      originSpeakers: speakers.value.map(({id,name}) => ({speakerId:id,speaker:name}))
    }
    await editSpeakerCore(params)
    emit('updateSpeakers', speakers.value.map(({ id, name,count }) => ({ id, name,count})))
    // 如果选择了应用到所有匹配的说话人
    if (applyToAllMatching.value) {
      // 更新所有匹配的说话人
      if (transcriptData.value && transcriptData.value.paragraphs) {
        transcriptData.value.paragraphs.forEach((p) => {
          if (p.speakerId === originSelectedSpeakerId.value) {
            p.speakerId = selectedSpeakerId.value;
            p.speaker = selectedSpeaker.name;
          }
        });
      }
    } else {
      // 只更新当前说话人（根据pid）
      const paragraph = transcriptData.value.paragraphs.find(
        (p) => p.pid === selectedPid.value
      );
      if (paragraph) {
        paragraph.speakerId = selectedSpeakerId.value;
        paragraph.speaker = selectedSpeaker.name;
      }
    }
    // 关闭弹窗
    handleSpeakerPopoverHide();
  };

  // 打开编辑说话人弹窗
  const openEditSpeakerDialog = (speaker = null) => {
    if (speaker) {
      editingSpeakerId.value = speaker.id;
      editingSpeakerName.value = speaker.name;
    } else {
      // 新增说话人
      editingSpeakerId.value = "";
      editingSpeakerName.value = "";
    }

    editSpeakerDialogVisible.value = true;
  };

  // 选择说话人
  const selectSpeaker = (speakerId) => {
    selectedSpeakerId.value = speakerId;
  };

  // 确认编辑说话人
  const confirmEditSpeaker = () => {
    const trimmedName = editingSpeakerName.value.trim();


    // 如果没有输入名称且不是未分配状态，则取消编辑
    if (!trimmedName) {
      editSpeakerDialogVisible.value = false;
      return;
    }

    // 生成或保留说话人ID
    let newSpeakerId = editingSpeakerId.value;
    let newSpeakerName = trimmedName;

    // 如果是新增说话人，生成新的ID并添加到speakers数组
    if (editingSpeakerId.value === '') {
      newSpeakerId = ++maxSpeakerId;
      // 如果已有说话人
      const target = speakers.value.find(speaker => speaker.name === newSpeakerName);
      if(target){
        newSpeakerId = target.id
      } else {
        // 添加到speakers数组
        speakers.value.push({
          id: newSpeakerId,
          name: newSpeakerName,
          count: 0
        });
      }
    } else {
      // 如果是编辑现有说话人
      // 如果编辑的名字在speakers中已存在，则使用已有的id
      const target = speakers.value.find(speaker => speaker.name === newSpeakerName);
      if(target){
        newSpeakerId = target.id
      } else {
        const cur = speakers.value.find(s => s.id === editingSpeakerId.value);
        // 如果当前的说话人大于1
        if (cur.count > 1) {
          editAddSpeakersMap.value[cur.id] = {
            id: ++maxSpeakerId,
            name: newSpeakerName,
            originId: cur.id,
            originName: cur.name,
            count: 0
          }
        }
        cur.name = newSpeakerName
      }
    }
    selectedSpeakerId.value = newSpeakerId;

    // 关闭编辑弹窗
    editSpeakerDialogVisible.value = false;

    // 更新弹窗状态
    speakerDialogVisible.value = true;
  };

  // 处理显示/隐藏说话人
  const handleShowSpeaker = () => {
    isShowSpeaker.value = !isShowSpeaker.value;
  };

  // 处理点击外部关闭弹窗
  const handleOutsideClick = (e) => {
    if (!selectedPid.value) return;
    const nuxtRoot = document.querySelector("#__nuxt");
    const target = e.target;
    if (nuxtRoot?.contains(target)) {
      handleSpeakerPopoverHide(true);
    }
  };

  return {
    speakerDialogVisible,
    editSpeakerDialogVisible,
    selectedSpeakerId,
    originSelectedSpeakerId,
    editingSpeakerId,
    editingSpeakerName,
    applyToAllMatching,
    speakerPopoverRef,
    speakerPopoverVisible,
    selectedPid,
    speakerBtnRef,
    isShowSpeaker,
    speakers,
    uniqueSpeakers,
    uniqueSpeakersMap,
    hasDuplicateSpeakers,
    handleSpeakerPopoverShow,
    handleSpeakerPopoverHide,
    confirmSpeakerSelection,
    openEditSpeakerDialog,
    selectSpeaker,
    confirmEditSpeaker,
    handleShowSpeaker,
    handleOutsideClick,
    editAddSpeakersMap,
    scrollbarRef
  };
}
