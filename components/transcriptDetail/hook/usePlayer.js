import { ref, toRefs, watch, computed } from "vue";
import Player, { Events, I18N, Util, Plugin } from "xgplayer";
import TextTrack from "xgplayer/es/plugins/track";
import "xgplayer/dist/index.min.css";
import "xgplayer/es/plugins/track/index.css";
import { TmSubTitleIcon, TmMinimize, TmControl } from "../customPlugins.js";
import { useIntervalFn, useMediaQuery, useDebounceFn } from "@vueuse/core";

export default function usePlayer(transcriptData, isShowVideo, props) {
  const playerAudio = ref(null);
  const playerVideo = ref(null);
  const currentTime = ref(0);
  const dynamicScroller = ref(null);
  const activeWord = ref({ paraIndex: -1, sentIndex: -1, contentIndex: -1 });
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { locale } = useI18n();
  const activeLanguage = useState("locale", () => locale.value);
  const isRtl = computed(() =>
    ["he-IL", "ar-SA"].includes(activeLanguage.value)
  );
  // 所有分段
  const allSegments = ref([]);
  const { fileType } = toRefs(props.fileBaseInfo);
  const isVideo = computed(() => {
    const mp4Type = ["MP4", "MOV", "MPEG", "WMV"];
    return (
      isDesktop.value &&
      !!mp4Type.find(
        (item) => item.toLowerCase() === fileType.value.toLowerCase()
      )
    );
  });

  // 更新当前播放时间
  const updateCurrentTime = (time) => {
    // 处理精度问题，保留3位小数
    currentTime.value = parseFloat(time.toFixed(3));
  };

  // 自定义图标创建函数
  const createCustomIcon = (
    iconName,
    className = "text-black",
    style = "font-size:1rem"
  ) => {
    return () => {
      return Util.createDom(
        "div",
        `<span class="iconfont ${iconName}" style="${style}"></span>`,
        {},
        className
      );
    };
  };

  // 播放器配置
  const commonConfig = {
    width: "100%",
    height: "100%",
    miniprogress: true,
    keyShortcut: false,
    seekedStatus: "auto",
    customDuration: props.fileBaseInfo.duration,
    volume: {
      default: 0.6,
      showValueLabel: true,
      index: 1000
    },
    commonStyle: {
      progressColor: "#E8E8F1",
      playedColor: "#3470FF",
      cachedColor: "",
      sliderBtnStyle: {
        background: "#3470FF",
        boxShadow: "none"
      },
      volumeColor: "#3470FF"
    },
    videoConfig: {
      crossOrigin: "anonymous"
    }
  };
  // 生成播放速率列表
  const genPlaybackRateList = (range) => {
    return range.map((rate) => {
      return {
        text: rate + "X",
        rate: parseFloat(rate)
      };
    });
  };
  // 初始化播放器
  const initPlayers = (fileBaseInfo, locale, allSegments) => {
    if (isVideo.value) {
      playerVideo.value = new Player({
        ...commonConfig,
        lang: locale.value,
        id: "mse",
        url: fileBaseInfo.fileUrl,
        fluid: true,
        plugins: [
          TextTrack,
          TmSubTitleIcon,
          TmMinimize,
          ...(isRtl.value ? [TmControl] : [])
        ],
        ignores: ["cssFullScreen", ...(isRtl.value ? ["progress"] : [])],
        leavePlayerTime: 0,
        controls: {
          initShow: true,
          mode: "normal"
        },
        tmControl: {
          dynamicProgressBar: true
        },
        volume: {
          default: 0.6,
          showValueLabel: true,
          index: 1,
          position: Plugin.POSITIONS.CONTROLS_LEFT
        },
        playbackRate: {
          index: 999,
          hidePortrait: false,
          listType: "middle",
          list: genPlaybackRateList([
            "3.0",
            "2.0",
            "1.5",
            "1.25",
            "1.0",
            "0.75",
            "0.5"
          ])
        },
        textTrack: {
          isShowIcon: false,
          debugger: false,
          isIcons: true,
          style: {
            follow: true,
            mode: "bg",
            followBottom: 50,
            fitVideo: true,
            offsetBottom: 6,
            baseSizeX: 49,
            baseSizeY: 28,
            minSize: 14,
            minMobileSize: 12,
            line: "double",
            fontColor: "#fff"
          },
          list: [
            {
              id: "subTitleId",
              language: locale.value,
              text: "subTitle",
              default: true,
              list: [
                {
                  start: allSegments.value[0]?.start || 0,
                  end:
                    allSegments.value[allSegments.value.length - 1]?.end || 0,
                  list: allSegments.value
                }
              ]
            }
          ]
        },
        tmSubTitleIcon: {
          show: false
        },
        icons: {
          play: createCustomIcon(
            "icon-shipinbofang1",
            "text-white",
            "font-size:1.125rem"
          ),
          pause: createCustomIcon(
            "icon-shipingzanting",
            "text-white",
            "font-size:1.125rem"
          ),
          volumeSmall: createCustomIcon(
            "icon-shipinyinliangxiao",
            "text-white",
            "margin-inline-start: 0.375rem"
          ),
          volumeLarge: createCustomIcon(
            "icon-shipinyinliangda",
            "text-white",
            "font-size:0.875rem;margin-inline-start: 0.375rem"
          ),
          volumeMuted: createCustomIcon(
            "icon-shipinjingyin",
            "text-white",
            "margin-inline-start: 0.375rem"
          ),
          fullscreen: createCustomIcon("icon-shipinquanpingmu", "text-white"),
          exitFullscreen: createCustomIcon(
            "icon-shipinsuoxiaopingmu",
            "text-white"
          )
        }
      });
    } else {
      playerAudio.value = new Player({
        ...commonConfig,
        lang: locale.value,
        id: "audioID",
        url: fileBaseInfo.fileUrl,
        seekedStatus: "auto",
        mediaType: "audio",
        plugins: [...(isRtl.value ? [TmControl] : [])],
        ignores: [
          "start",
          "cssFullScreen",
          "fullscreen",
          "pip",
          "enter",
          "replay",
          "pc",
          "loading",
          "poster",
          ...(isRtl.value ? ["progress", "mobile"] : [])
        ].filter(Boolean),
        playbackRate: {
          index: 999,
          listType: "middle",
          list: genPlaybackRateList([
            "3.0",
            "2.0",
            "1.5",
            "1.25",
            "1.0",
            "0.75",
            "0.5"
          ])
        },
        controls: {
          root: document.getElementById("audio-crt"),
          initShow: true,
          mode: "flex"
        },
        icons: {
          play: createCustomIcon(
            "icon-bofang",
            "text-black",
            "font-size: 1.375rem"
          ),
          pause: createCustomIcon(
            "icon-zanting",
            "text-black",
            "font-size: 1.375rem"
          ),
          volumeSmall: createCustomIcon(
            "icon-yinliang",
            "text-black",
            "font-size: 1.2rem; margin-inline-start: 0.375rem"
          ),
          volumeLarge: createCustomIcon(
            "icon-shipinyinliangda",
            "text-black",
            "font-size: 1.05rem;margin-inline-start: 0.375rem"
          ),
          volumeMuted: createCustomIcon(
            "icon-shipinjingyin",
            "text-black",
            "font-size: 1.2rem; margin-inline-start: 0.375rem"
          )
        }
      });
    }
    initSetting();
    setupEventListeners();
  };
  const updateSubtitle = () => {
    if (!isVideo.value) return;
    updateOverlappingSegments();
    const textTrack = playerVideo.value.getPlugin("texttrack");
    textTrack.updateSubtitles([
      {
        id: "subTitleId",
        language: "en",
        text: "subTitle",
        default: true,
        list: [
          {
            start: allSegments.value[0]?.start || 0,
            end: allSegments.value[allSegments.value.length - 1]?.end || 0,
            list: allSegments.value
          }
        ]
      }
    ]);
  };
  // 初始化设置
  const initSetting = () => {
    const lastPlayTime = props.fileBaseInfo.lastPlayTime;
    const lastPlayVolume = props.fileBaseInfo.lastPlayVolume;
    const lastPlayRate = props.fileBaseInfo.lastPlayRate;

    if (isVideo.value) {
      playerVideo.value.on(Events.COMPLETE, () => {
        if (lastPlayTime) playerVideo.value.currentTime = +lastPlayTime;
        if (+lastPlayVolume === 0) {
          playerVideo.value.muted = true;
        } else {
          playerVideo.value.volume = +lastPlayVolume;
        }
        if (lastPlayRate) playerVideo.value.playbackRate = +lastPlayRate;
      });
    } else {
      playerAudio.value.on(Events.COMPLETE, () => {
        if (lastPlayTime) playerAudio.value.currentTime = +lastPlayTime;
        if (+lastPlayVolume === 0) {
          playerAudio.value.muted = true;
        } else {
          playerAudio.value.volume = +lastPlayVolume;
        }
        if (lastPlayRate) playerAudio.value.playbackRate = +lastPlayRate;
      });
    }
  };
  // 设置播放器事件监听
  const setupEventListeners = () => {
    if (isVideo.value) {
      /**************************  视频 ***********************************/
      const ctl = playerVideo.value.getPlugin("controls");
      const clickCtlFunc = (e) => {
        if (e.target === ctl.root) {
          if (playerVideo.value.paused) {
            return playerVideo.value.play();
          }
          playerVideo.value.pause();
        }
      };
      ctl.bindEL("click", clickCtlFunc);

      playerVideo.value
        .getPlugin("tmMinimize")
        .useHooks("minimizeClick", () => {
          isShowVideo.value = false;
        });
      const videoTimeUpdateFn = () => {
        activeWord.value = { paraIndex: -1, sentIndex: -1, contentIndex: -1 };
        const currentTime = playerVideo.value?.currentTime || 0;
        if (props.fileBaseInfo.isHalfHour && currentTime > 30 * 60) return;
        updateCurrentTime(currentTime);
        scrollToActiveWord();
      };
      playerVideo.value.on(Events.TIME_UPDATE, videoTimeUpdateFn);
      const videoPlayFn = () => {
        if (
          parseInt(currentTime.value) >= parseInt(props.fileBaseInfo.duration)
        ) {
          playerVideo.value.replay();
        }
      };
      playerVideo.value.on(Events.PLAY, videoPlayFn);
      // 销毁
      playerVideo.value.on(Events.DESTROY, () => {
        ctl.unbindEL("click", clickCtlFunc);
        playerVideo.value.off(Events.TIME_UPDATE, videoTimeUpdateFn);
        playerVideo.value.off(Events.PLAY, videoPlayFn);
      });
    } else {
      /************************** 音频 *************************************/
      const audioTimeUpdateFn = () => {
        activeWord.value = { paraIndex: -1, sentIndex: -1, contentIndex: -1 };
        const currentTime = playerAudio.value?.currentTime || 0;
        if (props.fileBaseInfo.isHalfHour && currentTime > 30 * 60) return;
        updateCurrentTime(currentTime);
        scrollToActiveWord();
        if (currentTime >= props.fileBaseInfo.duration) {
          playerAudio.value.currentTime = props.fileBaseInfo.duration;
          playerAudio.value.pause();
        }
      };
      playerAudio.value.on(Events.TIME_UPDATE, audioTimeUpdateFn);
      const audioPlayFn = () => {
        if (
          parseInt(currentTime.value) >= parseInt(props.fileBaseInfo.duration)
        ) {
          playerAudio.value.replay();
        }
      };
      playerAudio.value.on(Events.PLAY, audioPlayFn);
      // 销毁
      playerAudio.value.on(Events.DESTROY, () => {
        playerAudio.value.off(Events.TIME_UPDATE, audioTimeUpdateFn);
        playerAudio.value.off(Events.PLAY, audioPlayFn);
      });
    }
  };

  // 处理同时说话的人的文字重叠处理
  const processOverlappingSegments = () => {
    if (!transcriptData.value || !transcriptData.value.paragraphs) return [];

    // 先合并句子内容
    const mergedContents = mergeContentsUntilPunctuation();

    // 如果没有内容，直接返回空数组
    if (!mergedContents.length) return [];

    // 按开始时间排序
    mergedContents.sort(
      (a, b) => parseFloat(a.start_time) - parseFloat(b.start_time)
    );

    // 最终结果数组
    const overlappingSegments = [];

    // 创建时间线，记录所有开始和结束时间点
    const timeline = [];
    mergedContents.forEach((item) => {
      const start = +item.start_time;
      const end = +item.stop_time;
      timeline.push({ time: start, type: "start", item });
      timeline.push({ time: end, type: "end", item });
    });

    // 按时间排序
    timeline.sort((a, b) => a.time - b.time);
    // 当前活跃项
    const activeItems = new Set();

    // 上一个时间点
    let lastTime = timeline[0]?.time || 0;

    // 遍历时间线
    for (let i = 0; i < timeline.length; i++) {
      const event = timeline[i];
      const currentTime = event.time;

      // 如果当前有多个活跃项，并且时间点发生了变化，创建一个段落
      if (activeItems.size > 0 && currentTime > lastTime) {
        // 创建一个包含当前所有活跃项的段落
        const segment = {
          start: +lastTime,
          end: +currentTime,
          text: Array.from(activeItems).map((item) => item.content),
          textObj: Array.from(activeItems).map((item) => ({
            content: item.content,
            speaker: item.speaker
          }))
        };

        // 只有当有多个speaker或只有一个项但是时间跨度足够时才添加
        if (
          new Set(Array.from(activeItems).map((item) => item.speaker)).size >
            1 ||
          (activeItems.size === 1 && currentTime - lastTime > 0.01)
        ) {
          overlappingSegments.push(segment);
        }
      }

      // 更新活跃项
      if (event.type === "start") {
        activeItems.add(event.item);
      } else {
        activeItems.delete(event.item);
      }

      // 更新上一个时间点
      lastTime = currentTime;
    }

    return overlappingSegments;
  };

  // 合并句子内容，直到遇到标点符号
  const mergeContentsUntilPunctuation = () => {
    if (!transcriptData.value || !transcriptData.value.paragraphs) return [];

    const result = [];

    // 遍历所有段落
    transcriptData.value.paragraphs.forEach((paragraph) => {
      if (!paragraph.sentences) return;

      // 遍历所有句子
      paragraph.sentences.forEach((sentence) => {
        if (!sentence.contents || sentence.contents.length === 0) return;

        // 处理这个句子的所有内容
        const mergedSentenceContents = [];
        let subContent = "";
        for (const contentItem of sentence.contents) {
          subContent += contentItem.content;
        }
        mergedSentenceContents.push({
          sid: sentence.sid,
          start_time: sentence.start_time,
          stop_time: sentence.stop_time,
          content: subContent
        });

        // 将合并后的内容添加到结果中，带上段落ID
        mergedSentenceContents.forEach((item) => {
          result.push({
            ...item,
            speaker: paragraph.pid
          });
        });
      });
    });
    return result;
  };

  // 更新当前播放时间下的重叠段落
  const updateOverlappingSegments = () => {
    if (!transcriptData.value || !isVideo.value) return;
    allSegments.value = processOverlappingSegments();
  };

  // 滚动到当前播放的单词位置（内部实现）
  const _scrollToActiveWord = () => {
    try {
      // 早期返回条件检查
      if (
        !transcriptData.value?.paragraphs?.length ||
        transcriptData.isEdit?.value
      ) {
        return;
      }

      // 检查播放状态
      const isPlaying = isVideo.value
        ? !playerVideo.value?.paused
        : !playerAudio.value?.paused;

      if (isPlaying) {
        return;
      }

      const currentTimeValue = currentTime.value;
      if (typeof currentTimeValue !== "number" || currentTimeValue < 0) {
        return;
      }

      const paragraphs = transcriptData.value.paragraphs;

      // 查找活跃单词的结果
      const result = findActiveWord(paragraphs, currentTimeValue);
      console.log("🚀 ~ 活跃单词的结果  🚀", result);
      if (!result) {
        return;
      }

      // 滚动到目标位置
      scrollToTargetWord(result);
    } catch (error) {
      console.warn("Error in scrollToActiveWord:", error);
    }
  };

  // 防抖版本的滚动函数
  const scrollToActiveWord = useDebounceFn(_scrollToActiveWord, 100);

  // 构建时间索引数组
  const buildTimeIndex = (paragraphs) => {
    const startTime = performance.now();
    const timeIndex = [];

    for (let paraIndex = 0; paraIndex < paragraphs.length; paraIndex++) {
      const paragraph = paragraphs[paraIndex];

      if (!paragraph.sentences?.length) {
        continue;
      }

      for (
        let sentIndex = 0;
        sentIndex < paragraph.sentences.length;
        sentIndex++
      ) {
        const sentence = paragraph.sentences[sentIndex];

        if (!sentence.contents?.length) {
          continue;
        }

        for (
          let contentIndex = 0;
          contentIndex < sentence.contents.length;
          contentIndex++
        ) {
          const content = sentence.contents[contentIndex];

          if (content.start_time !== undefined) {
            const startTimeValue = +content.start_time;
            const stopTimeValue = content.stop_time
              ? +content.stop_time
              : startTimeValue + 0.1;

            timeIndex.push({
              startTime: startTimeValue,
              stopTime: stopTimeValue,
              paraIndex,
              sentIndex,
              contentIndex
            });
          }
        }
      }
    }

    // 按开始时间排序
    timeIndex.sort((a, b) => a.startTime - b.startTime);

    const endTime = performance.now();
    console.debug(
      `Time index built: ${timeIndex.length} items in ${(endTime - startTime).toFixed(2)}ms`
    );

    return timeIndex;
  };

  // 时间索引缓存
  let timeIndexCache = null;

  // 使用二分查找查找活跃单词
  const findActiveWord = (paragraphs, currentTimeValue) => {
    if (!timeIndexCache) {
      timeIndexCache = buildTimeIndex(paragraphs);
    }
    if (!timeIndexCache.length) {
      return null;
    }

    // 二分查找当前时间对应的单词
    const activeWord = binarySearchActiveWord(timeIndexCache, currentTimeValue);
    if (activeWord) {
      return {
        ...activeWord,
        isActive: true
      };
    }

    // 如果没有找到活跃单词，查找最接近的单词
    const closestWord = binarySearchClosestWord(
      timeIndexCache,
      currentTimeValue
    );
    return closestWord
      ? {
          ...closestWord,
          isActive: false
        }
      : null;
  };

  // 二分查找活跃单词
  const binarySearchActiveWord = (timeIndex, currentTimeValue) => {
    let left = 0;
    let right = timeIndex.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const item = timeIndex[mid];

      if (
        currentTimeValue >= item.startTime &&
        currentTimeValue < item.stopTime
      ) {
        // 找到活跃单词
        return item;
      } else if (currentTimeValue < item.startTime) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return null;
  };

  // 二分查找最接近的单词
  const binarySearchClosestWord = (timeIndex, currentTimeValue) => {
    let left = 0;
    let right = timeIndex.length - 1;
    let closest = null;
    let minDiff = Infinity;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const item = timeIndex[mid];
      const diff = Math.abs(currentTimeValue - item.startTime);

      if (diff < minDiff) {
        minDiff = diff;
        closest = { ...item, minDiff };
      }

      if (currentTimeValue < item.startTime) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    // 检查边界元素
    if (left < timeIndex.length) {
      const diff = Math.abs(currentTimeValue - timeIndex[left].startTime);
      if (diff < minDiff) {
        closest = { ...timeIndex[left], minDiff: diff };
      }
    }

    if (right >= 0) {
      const diff = Math.abs(currentTimeValue - timeIndex[right].startTime);
      if (diff < minDiff) {
        closest = { ...timeIndex[right], minDiff: diff };
      }
    }

    return closest;
  };

  // 滚动到目标单词
  const scrollToTargetWord = async (wordInfo) => {
    try {
      const { paraIndex, sentIndex, contentIndex } = wordInfo;
      const paragraphs = transcriptData.value.paragraphs;

      // 验证段落索引
      if (!paragraphs[paraIndex]) {
        console.warn(`Invalid paragraph index: ${paraIndex}`);
        return;
      }

      const targetPid = paragraphs[paraIndex].pid;

      // 尝试找到已渲染的虚拟项
      const targetVirtualItemWrap = document.querySelector(
        `.virtual-item-wrap[data-pid="${targetPid}"][data-active="true"]`
      );

      if (targetVirtualItemWrap) {
        // 如果找到了虚拟项，尝试滚动到具体的单词
        scrollToSpecificWord(targetVirtualItemWrap, sentIndex, contentIndex);
      } else {
        // 如果没有找到虚拟项，使用虚拟滚动器滚动到段落
        await scrollToParagraph(paraIndex, targetPid);
        let container = document.querySelector(
          `.virtual-item-wrap[data-pid="${targetPid}"][data-active="true"]`
        );
        scrollToSpecificWord(container, sentIndex, contentIndex);
      }
    } catch (error) {
      console.warn("Error in scrollToTargetWord:", error);
    }
  };

  // 滚动到具体单词
  const scrollToSpecificWord = (containerElement, sentIndex, contentIndex) => {
    try {
      // 尝试找到具体的单词元素
      const targetSpan = containerElement.querySelector(
        `span[data-sent-index="${sentIndex}"][data-content-index="${contentIndex}"]`
      );

      let elementToScroll = targetSpan || containerElement;
      // 执行滚动
      elementToScroll.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    } catch (error) {
      console.warn("Error in scrollToSpecificWord:", error);
    }
  };

  // 处理单词点击
  const handleWordClick = (paraIndex, sentIndex, contentIndex, content) => {
    // 设置当前活动单词
    activeWord.value = { paraIndex, sentIndex, contentIndex };

    // 跳转到音频对应时间点，并保持原来的播放状态
    if (content.start_time !== undefined) {
      //
      const startTime = +content.start_time;
      if (isVideo.value) {
        playerVideo.value.currentTime = startTime;
      } else {
        playerAudio.value.currentTime = startTime;
      }
    }
  };

  // 根据段落id,滚动到指定段落
  const scrollToParagraph = async (paraIndex, paraId) => {
    if (!dynamicScroller.value) return false;

    let isExistVirtualItemWrap = document.querySelector(
      `.virtual-item-wrap[data-pid="${paraId}"][data-active="true"]`
    );
    if (isExistVirtualItemWrap) {
      return true;
    }

    dynamicScroller.value.scrollToItem(paraIndex);
    let count = 0;

    return new Promise((resolve) => {
      const { pause } = useIntervalFn(() => {
        count++;
        let isExistVirtualItemWrap = document.querySelector(
          `.virtual-item-wrap[data-pid="${paraId}"][data-active="true"]`
        );
        if (isExistVirtualItemWrap || count >= 20) {
          // 暂停 清理定时器
          pause();
          return resolve(true);
        }
      }, 50);
    });
  };

  // 判断单词是否应该高亮
  const isWordActive = (content, paraIndex, sentIndex, contentIndex) => {
    // 当前播放时间的高亮 (将毫秒转换为秒进行比较)
    const isTimeActive =
      content.start_time !== undefined &&
      content.stop_time !== undefined &&
      currentTime.value >= +content.start_time &&
      currentTime.value < +content.stop_time;
    // 用户点击的高亮
    const isClickedActive =
      activeWord.value.paraIndex === paraIndex &&
      activeWord.value.sentIndex === sentIndex &&
      activeWord.value.contentIndex === contentIndex;
    return isClickedActive || isTimeActive;
  };

  // 监听i18n变化
  const setupI18nWatch = (locale, getLocaleMessage) => {
    watch(
      locale,
      () => {
        // 覆盖原来的英文语言 ，否则自定义的key会取不到值
        const enLang = getLocaleMessage("en-US");
        I18N.use({ LANG: "en", TEXT: enLang.videoLang || {} });
        let localeMessage = getLocaleMessage(locale.value);
        if (localeMessage.videoLang) {
          let lang = locale.value;
          const csLang = {
            LANG: lang,
            TEXT: localeMessage.videoLang || {}
          };
          I18N.use(csLang);
        }
      },
      { immediate: true }
    );
  };

  return {
    playerAudio,
    playerVideo,
    currentTime,
    dynamicScroller,
    allSegments,
    initPlayers,
    updateOverlappingSegments,
    handleWordClick,
    isWordActive,
    scrollToParagraph,
    setupI18nWatch,
    isVideo,
    updateSubtitle,
    isRtl
  };
}
