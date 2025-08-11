export const useUploadStore = defineStore("upload", () => {
  const fileTypes = ref([
    "MP3",
    "MP4",
    "M4A",
    "MOV",
    "AAC",
    "WAV",
    "OGG",
    "OPUS",
    "MPEG",
    "WMA",
    "WMV"
  ]);
  const selectRawFiles = ref<File[]>([]);

  const updateSelectRawFiles = (files: File) => {
    selectRawFiles.value.push(files);
  };
  const clearSelectRawFiles = () => {
    selectRawFiles.value = [];
  };

  const showResultDialog = ref(false);

  const beforeOpenDialog = async () => {
    return new Promise((resolve, reject) => {
      if (selectRawFiles.value.length) {
        showResultDialog.value = true;
        reject(false);
      }
      resolve(true);
    });
  };

  const showFileDialog = ref(false);
  const openFileDialog = async () => {
    await beforeOpenDialog();
    showFileDialog.value = true;
  };

  const showLinkDialog = ref(false);
  const openLinkDialog = async () => {
    await beforeOpenDialog();
    showLinkDialog.value = true;
  };

  const showFileAndLinkDialog = ref(false);
  const openFileAndLinkDialog = async () => {
    await beforeOpenDialog();
    showFileAndLinkDialog.value = true;
  };

  const newFileList = ref<string[]>([]);
  const updateNewFileList = (files: any) => {
    newFileList.value = files;
  };
  const resetNewFileList = () => {
    newFileList.value = [];
  };

  return {
    selectRawFiles,
    fileTypes,
    updateSelectRawFiles,
    clearSelectRawFiles,

    showFileDialog,
    openFileDialog,
    showLinkDialog,
    openLinkDialog,
    showFileAndLinkDialog,
    openFileAndLinkDialog,
    showResultDialog,

    newFileList,
    updateNewFileList,
    resetNewFileList
  };
});
