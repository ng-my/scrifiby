import type { UploadFile } from "~/components/upload/useUpload";

export const useLink = (emit?: any) => {
  const { selectedFolder } = storeToRefs(useFolderStore());
  const { updateSelectRawFiles } = useUploadStore();
  const loading = ref(false);
  const link = ref("");
  const { t } = useI18n();
  const patterns = [
    /^https?:\/\/[^\/]*youtube\.com\/.*$|^https?:\/\/[^\/]*youtu\.be\/.*$/,
    /^https?:\/\/[^\/]*(facebook\.com|fb\.com)\/.*$/,
    /^https?:\/\/[^\/]*(twitter\.com|x\.com)\/.*$/,
    /^https?:\/\/[^\/]*dropbox\.com\/.*$/,
    /^https?:\/\/[^\/]*(drive\.google\.com|docs\.google\.com)\/.*$/,
    /^https?:\/\/[^\/]*vimeo\.com\/.*$/
  ];
  const route = useRoute();
  const handleConfirm = async () => {
    try {
      if (!patterns.some((pattern) => pattern.test(link.value))) {
        ElMessage.error({
          message: t("FileUploadAndRecording.upload.link.errorTitle"),
          customClass: "!z-[9999]"
        });
        return;
      }
      loading.value = true;
      const { useFolderApi } = await import("~/api/folder");
      const { createFileByLink } = useFolderApi;
      const idObj = await createFileByLink({
        url: link.value,
        parentId: route?.path?.includes("folder")
          ? selectedFolder.value?.id || 0
          : 0
      });
      const file = new File(
        [],
        t("FileUploadAndRecording.upload.link.linkName")
      );
      // (file as any).localFileId = idObj.id;
      (file as any).localRequestId = idObj.id;
      (file as any).localFileSize = "--";
      updateSelectRawFiles(file);
      if (emit) {
        emit("confirm", file);
      }
    } finally {
      loading.value = false;
    }
  };

  return {
    handleConfirm,
    loading,
    link
  };
};
