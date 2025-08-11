import { ref, toRefs } from "vue";
import { useMediaQuery } from "@vueuse/core";

export default function useFileInfo(props) {
  // 文件信息相关状态
  const {
    fileName,
    isShowTimestamp,
    gmtCreateTime: fileUploadTime
  } = toRefs(props.fileBaseInfo);
  const originName = fileName.value;
  isShowTimestamp.value ??= true;
  fileUploadTime.value ??= "";
  const isEditing = ref(false);
  const fileNameElement = ref(null);
  const fileNameInputRef = ref(null);
  const fileNamePopoverRef = ref(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  // 文件名编辑相关方法
  const startEditing = () => {
    setTimeout(() => {
      fileNameInputRef.value?.focus();
    }, 100);
  };
  const saveFileName = async () => {
    try {
      const newName = fileName.value.trim();
      const { useFolderApi } = await import("~/api/folder");
      await useFolderApi.renameFile({
        id: props.fileBaseInfo.id,
        taskId: props.fileBaseInfo.taskId,
        fileName: newName
      });
      fileName.value = newName;
    } catch (e) {
      fileName.value = originName;
      console.log("🚀 ~ 文件名保存异常 🚀", e);
    } finally {
      fileNamePopoverRef.value?.hide();
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
  const fileNameInput = (val) => {
    fileName.value = val.replace(/\//g, "");
  };

  return {
    fileName,
    fileUploadTime,
    fileNameElement,
    isShowTimestamp,
    startEditing,
    saveFileName,
    handleShowTimestamp,
    formatSecondsFromMs,
    fileNameInputRef,
    fileNamePopoverRef,
    fileNameInput
  };
}
