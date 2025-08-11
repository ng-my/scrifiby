import { ref, toRefs } from "vue";
import { useMediaQuery } from "@vueuse/core";

export default function useFileInfo(props) {
  // 文件信息相关状态
  const {
    fileName,
    isShowTimestamp,
    gmtCreateTime: fileUploadTime
  } = toRefs(props.fileBaseInfo);
  isShowTimestamp.value ??= true;
  fileUploadTime.value ??= "";
  const isEditing = ref(false);
  const fileNameElement = ref(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  // 文件名编辑相关方法
  const startEditing = () => {
    if (isEditing.value) return;

    isEditing.value = true;
    // 使用setTimeout确保DOM已更新后再聚焦
    setTimeout(() => {
      if (fileNameElement.value) {
        fileNameElement.value.focus();
        // 创建选区，将光标定位到文本末尾
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(fileNameElement.value);
        range.collapse(false); // 将光标定位到末尾
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }, 10);
  };

  const saveFileName = async () => {
    try {
      if (fileNameElement.value) {
        const newName = fileNameElement.value.textContent.trim();
        const { useFolderApi } = await import("~/api/folder");
        await useFolderApi.renameFile({
          id: props.fileBaseInfo.id,
          taskId: props.fileBaseInfo.taskId,
          fileName: newName
        });
        fileName.value = newName;
      }
      isEditing.value = false;
    } catch (e) {
      console.log("🚀 ~ file: useFileInfo.js method: saveFileName line: 48 🚀",e )
    }
  };

  const cancelEditing = () => {
    if(isDesktop.value){
      // 取消编辑，恢复原来的值
      if (fileNameElement.value) {
        fileNameElement.value.textContent = fileName.value;
      }
      isEditing.value = false;
    } else {
      // 手机端保存
      saveFileName()
    }
  };

  // 显示/隐藏时间戳
  const handleShowTimestamp = () => {
    isShowTimestamp.value = !isShowTimestamp.value;
  };

  // 格式化时间戳
  const formatSecondsFromMs = (totalSeconds) => {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = parseInt(totalSeconds % 60);

    // 格式化为字符串
    const formattedDays = days > 0 ? `${days}d ` : "";
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    if (days > 0) {
      return `${formattedDays}${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return {
    fileName,
    fileUploadTime,
    isEditing,
    fileNameElement,
    isShowTimestamp,
    startEditing,
    saveFileName,
    cancelEditing,
    handleShowTimestamp,
    formatSecondsFromMs
  };
}
