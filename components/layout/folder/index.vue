<template>
  <div class="">
    <!-- 顶部操作栏 -->
    <div
      ref="folderBar"
      class="flex h-8 w-full items-center justify-between rounded-lg px-3 py-2.5 pe-0.5 transition-all duration-300 hover:bg-boxBgColor"
    >
      <div
        @click.stop="toggleExpanded"
        class="flex w-full cursor-pointer items-center"
      >
        <div class="me-2.5 flex h-full w-3 cursor-pointer items-center">
          <el-icon v-if="isExpanded">
            <ArrowDown />
          </el-icon>
          <el-icon v-else>
            <ArrowUp />
          </el-icon>
        </div>
        <span class="text-sm">{{ t("HomePage.folders") }}</span>
      </div>

      <span
        v-if="!isMobile"
        id="step2"
        :class="{ 'opacity-100': isHovered || step === 2 }"
        @click="showCreateDialog"
        class="flex h-7 w-7 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg opacity-0 hover:bg-black hover:bg-opacity-[0.08]"
      >
        +
      </span>
      <span
        v-else
        id="step2"
        @click="showCreateDialog"
        class="flex h-7 flex-shrink-0 cursor-pointer items-center justify-center text-mainColor-900"
      >
        + {{ t("FolderPage.create") }}
      </span>
    </div>

    <!-- 文件夹列表 -->
    <layout-folder-list
      :folders="folders"
      :isExpanded="isExpanded"
      @rename="showRenameDialog"
      @delete="showDeleteDialog"
      @rowClick="handleRowClick"
    />

    <!-- 操作弹窗 (复用同一个组件) -->
    <layout-folder-action-dialog
      v-model="dialogVisible"
      ref="actionDialog"
      :type="dialogType"
      :loading="loading"
      :folder="currentFolder"
      @confirm="handleDialogConfirm"
    />
  </div>
</template>

<script setup lang="ts">
import { ArrowUp, ArrowDown } from "@element-plus/icons-vue";
import { ref } from "vue";
import { Msg } from "~/utils/tools";
import { type Folder } from "~/api/type/folder";
import { useFolderListStore, useFolderStore } from "~/stores/useFolderStore";
import { useAnimation } from "~/components/layout/folder/useAnimation";

const { t } = useI18n();
// 状态管理
const folders = ref<Folder[]>([]);

const emit = defineEmits(["rowClick"]);

const route = useRoute();
const router = useRouter();

const dialogVisible = ref(false);
const dialogType = ref<"delete" | "rename" | "create">("delete");
const currentFolder = ref<Folder | null>(null);

// 显示不同弹窗
const showDeleteDialog = (folder: Folder) => {
  dialogType.value = "delete";
  currentFolder.value = folder;
  dialogVisible.value = true;
};

const showRenameDialog = (folder: Folder) => {
  currentFolder.value = folder;
  dialogType.value = "rename";
  dialogVisible.value = true;
};

const showCreateDialog = () => {
  dialogType.value = "create";
  currentFolder.value = null;
  dialogVisible.value = true;
};

const { setFolderList } = useFolderListStore();
const { folderList } = storeToRefs(useFolderListStore());
const { updateFolder } = useFolderStore();
const { selectedFolder } = storeToRefs(useFolderStore());
const fetchList = async (isEdit = false) => {
  if (!isEdit && folderList.value.length > 0) {
    folders.value = folderList.value;
    return;
  }
  try {
    const { useFolderApi } = await import("~/api/folder");
    folders.value = await useFolderApi.getFolderList();
    setFolderList(folders.value);
  } catch (e) {}
};
fetchList();
// 处理弹窗确认
const loading = ref(false);
const handleDialogConfirm = (newName: string) => {
  if (dialogType.value === "delete") {
    handleDeleteFolder();
  } else if (dialogType.value === "rename") {
    handleEditFolder(newName);
  } else if (dialogType.value === "create") {
    handelCreateFolder(newName);
  }
};

const handleDeleteFolder = async () => {
  try {
    loading.value = true;
    const { useFolderApi } = await import("~/api/folder");
    await useFolderApi.deleteFolder({ folderId: currentFolder.value!.id });
    await fetchList(true);
    Msg({
      message: t("FolderPage.delSuccess"),
      type: "success"
    });
    if (selectedFolder.value.id === currentFolder.value!.id) {
      router.push(localePath("/home"));
      updateFolder({});
    }
    dialogVisible.value = false;
  } catch (err) {
  } finally {
    loading.value = false;
  }
};

const actionDialog = useTemplateRef("actionDialog");
const handelCreateFolder = async (name: string) => {
  try {
    loading.value = true;
    const { useFolderApi } = await import("~/api/folder");
    await useFolderApi.createFolder({ folderName: name });
    if (actionDialog.value) {
      actionDialog.value.isOver = true;
    }
    await fetchList(true);
    dialogVisible.value = false;
    isExpanded.value = true;
  } catch (err) {
  } finally {
    loading.value = false;
  }
};

const handleEditFolder = async (newName: string) => {
  try {
    loading.value = true;
    const { useFolderApi } = await import("~/api/folder");
    await useFolderApi.editFolder({
      folderId: currentFolder.value!.id,
      folderName: newName
    });
    if (actionDialog.value) {
      actionDialog.value.isOver = true;
    }
    selectedFolder.value = {
      ...currentFolder.value,
      folderName: newName
    };
    await fetchList(true);
    dialogVisible.value = false;
  } catch (err) {
  } finally {
    loading.value = false;
  }
};

onBeforeRouteLeave((to, from, next) => {
  if (
    !to.path.includes("/folder") &&
    !to.path?.includes("/home") &&
    !to.path?.includes("/accountSettings")
  ) {
    folderList.value = [];
  }
  next();
});

const { isJumpFromHome } = storeToRefs(useFolderListStore());
const handleRowClick = (row: Folder) => {
  router.push(localePath("/folder"));
  updateFolder(row);
  isJumpFromHome.value = true;
  emit("rowClick");
};

const folderBarRef = useTemplateRef("folderBar");
const isHovered = useElementHover(folderBarRef);

const localePath = useLocalePath();

const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});

const { isExpanded, toggleExpanded } = useAnimation();

const { step } = storeToRefs(useTourStore());
const isMobile = useState("isMobile");
</script>

<style scoped>
.selected {
  @apply bg-black bg-opacity-[0.08] font-medium;
}
</style>
