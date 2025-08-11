<template>
  <div ref="table" class="min-h-80 min-w-0 flex-1 overflow-y-hidden">
    <div
      class="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between"
    >
      <transition
        name="header-switch"
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 transform translate-y-4 scale-95"
        enter-to-class="opacity-100 transform translate-y-0 scale-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 transform translate-y-0 scale-100"
        leave-to-class="opacity-0 transform -translate-y-2 scale-105"
        mode="out-in"
      >
        <div
          class="header me-0 flex min-h-8 flex-shrink flex-wrap items-center justify-start sm:flex-nowrap lg:me-2 lg:flex-shrink-0"
          v-if="selectedList.length"
        >
          <span class="me-3 text-sm font-medium sm:me-5"
            >{{ selectedList.length }}
            {{ t("FolderPage.table.selected") }}</span
          >
          <div
            v-if="!isSelectExecState"
            @click="handleMulMove"
            class="common-select"
          >
            <div class="flex h-5 items-center">
              <span
                class="iconfont icon-move me-1.5 text-xs text-fontColor"
              ></span>
            </div>
            <span>{{ t("FolderPage.table.move") }}</span>
          </div>
          <div
            v-if="!isSelectExecState"
            @click="handleMulExport"
            class="common-select"
          >
            <div class="flex h-5 items-center">
              <span
                class="iconfont icon-xiazai me-1.5 text-xs text-fontColor"
              ></span>
            </div>
            {{ t("FolderPage.table.export") }}
          </div>
          <div @click="handleMulDelete" class="common-select !sm:me-0 me-0">
            <div class="flex h-5 items-center">
              <span
                class="iconfont icon-lajixiang relative me-1.5 text-xs text-fontColor"
              ></span>
            </div>
            {{ t("FolderPage.table.delete") }}
          </div>
        </div>
        <div
          v-else-if="headerName"
          class="me-2 flex h-8 items-center justify-start overflow-hidden lg:h-auto"
        >
          <span
            :title="headerName.length > 14 ? headerName : undefined"
            class="overflow-hidden text-ellipsis text-nowrap text-sm font-medium text-gray-900"
            >{{ headerName }}</span
          >
        </div>
      </transition>
      <slot name="header-right"></slot>
    </div>

    <div dir="ltr" :class="{ mobile: isMobile }" class="transition-all">
      <client-only>
        <el-table-v2
          v-loading="loading"
          :key="locale"
          :columns="columns"
          :data="tableData"
          :width="size.width"
          :height="tableHeight"
          :header-height="headerHeight"
          :row-height="rowHeight"
          fixed
          :row-event-handlers="{
            onMouseenter: handleMouseenter,
            onMouseleave: handleMouseleave
          }"
          row-key="newId"
          @scroll="handleScroll"
        >
          <template #empty>
            <div
              class="flex flex-col items-center justify-center pt-10 md:pt-16"
            >
              <img
                class="mb-3.5 h-auto w-[4.1875rem]"
                src="/assets/images/home/empty.png"
                alt=""
              />
              <div class="mb-0.5 text-sm">
                {{ t("FolderPage.table.empty1") }}
              </div>
              <div class="text-sm">{{ t("FolderPage.table.empty2") }}</div>
            </div>
          </template>
          <template #header-cell="{ column }">
            <div
              v-if="column.key === 'name'"
              class="flex items-center"
              @mouseenter="showHeaderCheck = true"
              @mouseleave="showHeaderCheck = false"
            >
              <div class="me-2 flex h-3.5 w-3.5 items-center">
                <div
                  v-if="selectedList.length || showHeaderCheck || isMobile"
                  class="transition-all duration-200 ease-in-out"
                >
                  <el-checkbox
                    :model-value="
                      allLength && selectedList.length === allLength
                    "
                    :disabled="!tableData.length"
                    :indeterminate="
                      !!selectedList.length && selectedList.length !== allLength
                    "
                    @change="
                      (val) => {
                        tableData.forEach((row) => {
                          row.isSelected = !!val;
                        });
                      }
                    "
                  />
                </div>
              </div>
              <span
                class="h-8 font-normal leading-8 text-fontColor transition-all duration-200 ease-out"
                >{{ column.title }}</span
              >
            </div>
          </template>
        </el-table-v2>
      </client-only>
    </div>

    <client-only>
      <home-dialog-move
        v-model="moveDialogVisible"
        :selectIds="selectIds"
        :tableData="tableData"
        @confirm="handleDialogConfirm('move')"
      />
      <home-dialog-delete
        @confirm="handleDialogConfirm('delete')"
        :selectIds="selectIds"
        :tableData="tableData"
        v-model="deleteDialogVisible"
      />
      <home-dialog-export
        :tableData="tableData"
        :selectIds="selectIds"
        v-model="exportDialogVisible"
      />

      <home-dialog-rename
        :row="rowData"
        v-model="renameDialogVisible"
        @confirm="(value) => handleDialogConfirm('rename', value)"
      />
      <home-dialog-share :row="rowData" v-model="shareDialogVisible" />
    </client-only>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from "vue";
import type { Column, RowClassNameGetter } from "element-plus";
import { TableV2FixedDir } from "element-plus";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import { useElementSize } from "./useELementSize";
import { useTableColumnResizer } from "./useTableColumnResizer";
import { type FileItem } from "~/api/type/folder";
import { useRouter } from "#vue-router";
import { useLocalePath } from "#imports";
import { ElCheckbox, HomeStatusCell, ElPopover } from "#components";

import Utils from "~/utils/tools";

const props = defineProps<{
  search?: string;
  headerName?: string;
}>();

type TableItem = FileItem & {
  isSelected: boolean;
  __isHover: boolean;
};

const { t, locale } = useI18n();
const dayjs = useDayjs();
dayjs.extend(isToday);
dayjs.extend(isYesterday);

const { step } = storeToRefs(useTourStore());

const showHeaderCheck = ref(false);

const formatList = (list: FileItem[]): TableItem[] => {
  return list.map((item, index) => {
    return {
      ...item,
      newId: item.id + index,
      isSelected: false,
      __isHover: false
    };
  });
};
// 表格数据
const tableData = ref<TableItem[]>([]);
const { selectedFolder } = storeToRefs(useFolderStore());
const page = ref({
  pageNo: 1,
  pageSize: 100
});
const total = ref(0);
const loading = ref(false);
const route = useRoute();
let controller: any;
const fetchTableData = async () => {
  try {
    loading.value = true;
    const params: any = {
      ...page.value,
      parentId: selectedFolder.value?.id || 0
    };
    if (props.search) {
      params.fileName = props.search;
    }
    if (route?.name?.includes("home")) {
      delete params.parentId;
    }
    const { useFolderApi } = await import("~/api/folder");
    const { getFileList } = useFolderApi;
    if (controller) {
      controller.abort();
    }
    controller = new AbortController();
    const res = await getFileList(params, controller);
    tableData.value = [...tableData.value, ...formatList(res.list)];
    total.value = res.total;
    stopTaskStatusPolling();
    startTaskStatusPolling();
  } catch (err) {
  } finally {
    loading.value = false;
  }
};
const resetTableData = () => {
  tableData.value = [];
  total.value = 0;
  page.value.pageNo = 1;
};
watch(
  () => selectedFolder.value,
  (val, oldVal) => {
    if (val?.id === oldVal?.id) return;
    resetTableData();
    fetchTableData();
  }
);
fetchTableData();

watch(
  () => props.search,
  () => {
    resetTableData();
    fetchTableData();
  }
);

const { newFileList } = storeToRefs(useUploadStore());
const { resetNewFileList } = useUploadStore();
watch(
  () => newFileList,
  (val) => {
    if (!val.value?.length) return;
    resetNewFileList();
    resetTableData();
    fetchTableData();
  },
  { deep: true }
);

const allLength = computed(() => {
  return tableData.value.length;
});
const rowHeight = ref(50);
const scrollHeight = computed(() => {
  return rowHeight.value * allLength.value;
});
const load = () => {
  if (Math.ceil(total.value / page.value.pageSize) > page.value.pageNo) {
    page.value.pageNo++;
    fetchTableData();
  }
};

const selectedList = computed(() => {
  return tableData.value.filter((row) => row.isSelected);
});
const isSelectExecState = computed(() => {
  return selectedList.value.some(
    (e) => e.transcriptionStatus === 0 || e.transcriptionStatus === -1
  );
});

const moveDialogVisible = ref(false);
const selectIds = ref<string[]>([]);
const rowData = ref<TableItem | null>(null);
const handleMove = () => {
  selectIds.value = [rowData.value!.id];
  moveDialogVisible.value = true;
};
const handleMulMove = () => {
  selectIds.value = selectedList.value.map((e) => e.id);
  moveDialogVisible.value = true;
};
const renameDialogVisible = ref(false);
const handleRename = () => {
  renameDialogVisible.value = true;
};
const deleteDialogVisible = ref(false);
const handleDelete = () => {
  selectIds.value = [rowData.value!.id];
  deleteDialogVisible.value = true;
};
const handleMulDelete = () => {
  selectIds.value = selectedList.value.map((e) => e.id);
  deleteDialogVisible.value = true;
};
const shareDialogVisible = ref(false);
const handleShare = () => {
  shareDialogVisible.value = true;
};
const exportDialogVisible = ref(false);
const handleExport = () => {
  selectIds.value = [rowData.value!.id];
  exportDialogVisible.value = true;
};
const handleMulExport = () => {
  selectIds.value = selectedList.value.map((e) => e.id);
  exportDialogVisible.value = true;
};

const handleDialogConfirm = (type: string, value?: string) => {
  ElMessage.success({
    message: t("FolderPage.table.success"),
    customClass: "!z-[9999]"
  });
  resetTableData();
  fetchTableData();
};
const handleOperation = (type: string, value: any) => {
  rowData.value = value;
  switch (type) {
    case "move":
      handleMove();
      break;
    case "rename":
      handleRename();
      break;
    case "delete":
      handleDelete();
      break;
    case "share":
      handleShare();
      break;
    case "export":
      handleExport();
      break;
  }
};

// 表格列配置
const isMobile = ref(false);
onMounted(() => {
  isMobile.value = Utils.isMobile();
});
function formatTime(seconds: number) {
  // 确保处理整数秒（向下取整）
  const totalSeconds = Math.floor(seconds);

  // 计算小时、分钟和剩余秒数
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  // 格式化分钟和秒数为两位数
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = secs.toString().padStart(2, "0");

  // 当小时大于0时，格式化小时并返回完整时间
  if (hours > 0) {
    const formattedHours = hours.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  // 小时为0时，只返回分钟和秒
  return `${formattedMinutes}:${formattedSeconds}`;
}

// const isMobile = Utils.isMobile();
const router = useRouter();
const localePath = useLocalePath();

const { getTime } = useTime();
const isRtl = computed(() => {
  return ["he-IL", "ar-SA"].includes(locale.value);
});
const rowClickJump = (rowData: TableItem) => {
  if (rowData.transcriptionStatus !== 1) return;
  if (step.value === 3) return;
  router.push(
    localePath("/transcript/" + rowData.fileId + "?taskId=" + rowData.taskId)
  );
};
const getRowClass = (rowData: TableItem) => {
  if (rowData.isSelected) {
    return "selectRow";
  }
  return "";
};
const columns = ref<Column<TableItem>[]>([
  {
    key: "name",
    title: t("FolderPage.table.name"),
    dataKey: "fileName",
    width: 650,
    minWidth: 280,
    cellRenderer: ({ rowData }) => {
      const baseClass =
        "w-full line-clamp-1 cursor-pointer text-sm leading-8 transition-all duration-200 ease-out sm:text-base break-all";

      // Check if transcription is not ready (status !== 1)
      const isDisabled = rowData.transcriptionStatus !== 1;

      // Add disabled styling when transcription is not ready
      const className = isDisabled
        ? `${baseClass}  !cursor-not-allowed`
        : baseClass;

      const selectClass = rowData.isSelected ? "selectRow" : "";
      const disabledClass = isDisabled ? "disableRow" : "";

      return h(
        "div",
        {
          class: `w-full flex items-center font-medium text-black ${selectClass} ${disabledClass}`
        },
        [
          h(
            "div",
            {
              class: "me-2 flex h-3.5 w-3.5 items-center relative top-[1px]",
              style: {
                opacity:
                  (rowData.__isHover || rowData.isSelected || isMobile.value) &&
                  step.value !== 3
                    ? 100
                    : 0
              }
            },
            [
              h(ElCheckbox, {
                modelValue: rowData.isSelected,
                "onUpdate:modelValue": (value) => {
                  rowData.isSelected = value;
                }
              })
            ]
          ),
          h(
            "div",
            {
              title: rowData.fileName,
              onClick: () => rowClickJump(rowData),
              class: className
            },
            rowData.fileName
          )
        ]
      );
    }
  },
  {
    key: "duration",
    title: t("FolderPage.table.duration"),
    dataKey: "duration",
    width: 130,
    minWidth: 100,
    align: "center",
    cellRenderer: ({ rowData }) => {
      return h(
        "div",
        {
          class: `text-fontColor w-full`,
          onclick: () => rowClickJump(rowData)
        },
        formatTime(rowData.duration)
      );
    }
  },
  {
    key: "transcriptionStatus",
    title: t("FolderPage.table.status"),
    dataKey: "transcriptionStatus",
    width: 130,
    minWidth: 110,
    cellRenderer: ({ rowData }) =>
      h(
        "div",
        {
          class: `w-full `,
          onclick: () => rowClickJump(rowData)
        },
        h(HomeStatusCell, { row: rowData })
      )
  },
  {
    key: "uploadTime",
    title: t("FolderPage.table.date"),
    dataKey: "gmtCreateTime",
    width: 150,
    minWidth: 140,
    cellRenderer: ({ rowData }) =>
      h(
        "div",
        {
          class: `text-fontColor `,
          onclick: () => rowClickJump(rowData)
        },
        getTime(rowData.gmtCreateTime)
      )
  },
  {
    key: "operations",
    title: "",
    width: 40,
    minWidth: 40,
    cellRenderer: ({ rowData }) => {
      const popperStyle = {
        padding: "0",
        borderRadius: "0.5rem",
        boxShadow: "0 0 0.625rem 0 rgba(0,0,0,0.14)",
        minWidth: "8.125rem",
        width: "auto"
      };

      let buttons = [
        {
          icon: "icon-xiazai",
          name: t("FolderPage.table.export"),
          key: "export"
        },
        {
          icon: "icon-fenxiang",
          name: t("FolderPage.table.share"),
          key: "share"
        },
        {
          icon: "icon-a-bianjizhongmingming",
          name: t("FolderPage.table.rename"),
          key: "rename"
        },
        { icon: "icon-move", name: t("FolderPage.table.move"), key: "move" },
        {
          icon: "icon-lajixiang",
          name: t("FolderPage.table.delete"),
          type: "danger",
          key: "delete"
        }
      ];

      if (rowData.transcriptionStatus !== 1) {
        buttons = buttons.filter((item) => ["delete"].includes(item.key));
      }

      return step.value === 3
        ? h(
            "div",
            {
              class: `flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg transition-all duration-300 ease-linear hover:bg-hoverColor-deepen `
            },
            [h("span", { class: "iconfont icon-suolve" })]
          )
        : h(
            ElPopover,
            {
              trigger: "click",
              placement: "bottom-end",
              transition: "el-zoom-in-top",
              showArrow: false,
              popperStyle: popperStyle,
              offset: 4
            },
            {
              reference: () =>
                h(
                  "div",
                  {
                    class:
                      "flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg transition-all duration-300 ease-linear hover:bg-hoverColor-deepen"
                  },
                  [h("span", { class: "iconfont icon-suolve" })]
                ),
              default: () =>
                h(
                  "div",
                  { class: "w-full py-2.5" },
                  buttons.map((button) =>
                    h(
                      "div",
                      {
                        class:
                          "mb-2 flex h-8 w-full cursor-pointer items-center px-[1.5em] transition-all duration-100 last:mb-0 hover:bg-hoverColor-normal",
                        onClick: () => handleOperation(button.key, rowData)
                      },
                      [
                        h("span", {
                          class: [
                            "iconfont",
                            button.icon,
                            "me-2.5",
                            "text-fontColor",
                            "text-sm",
                            "relative",
                            "top-[-1px]"
                          ]
                        }),
                        h("span", {}, button.name)
                      ]
                    )
                  )
                )
            }
          );
    }
  }
]);

const updateColumnsForRTL = () => {
  if (isRtl.value) {
    // RTL: 如果当前第一列是 fileName，则需要反转
    if (columns.value[0]?.key === "name") {
      columns.value = [...columns.value].reverse();
    }
  } else {
    // LTR: 如果当前第一列不是 fileName，则需要反转回来
    if (columns.value[0]?.key !== "name") {
      columns.value = [...columns.value].reverse();
    }
  }
};

watch(
  isRtl,
  async () => {
    updateColumnsForRTL();
  },
  { immediate: true }
);

const handleMouseleave = ({ rowData, rowIndex }: any) => {
  tableData.value[rowIndex].__isHover = false;
};
const handleMouseenter = ({ rowData, rowIndex }: any) => {
  tableData.value[rowIndex].__isHover = true;
};

const tableRef = useTemplateRef("table");
const size = useElementSize(tableRef);
const { isFreeUser } = storeToRefs(useSubscriptionStore());
const tableHeight = computed(() => {
  if (isMobile.value) {
    if (selectedList.value.length && !isSelectExecState.value) {
      return size.value.height - 100;
    }
    if (isFreeUser.value) {
      return size.value.height - 100;
    }

    return size.value.height - 80;
  }
  return size.value.height - 50;
});
const handleScroll = (e: any) => {
  const scrollTop = e.scrollTop;
  if (!scrollTop) return;
  if (scrollTop > scrollHeight.value - (size.value.height + 50)) {
    load();
  }
};
useTableColumnResizer(columns, size, isRtl);

const isOver640 = useMediaQuery("(min-width: 640px)");
const headerHeight = ref(50);
watchEffect(() => {
  if (isOver640.value) {
    headerHeight.value = 50;
    rowHeight.value = 50;
  } else {
    headerHeight.value = 44;
    rowHeight.value = 44;
  }
});

let statusPollingTimer: any = null;
const stopTaskStatusPolling = () => {
  if (statusPollingTimer) {
    clearTimeout(statusPollingTimer);
    statusPollingTimer = null;
  }
};
const startTaskStatusPolling = async () => {
  try {
    // 找到需要查询的任务ID（transcriptionStatus === 0的记录）
    const pendingTasks = tableData.value.filter(
      (item) => item.transcriptionStatus === 0
    );

    // 如果没有待处理的任务，停止轮询
    if (pendingTasks.length === 0) {
      stopTaskStatusPolling();
      return;
    }

    // 提取任务ID作为接口入参
    const taskIds = pendingTasks.map((task: any) => task.taskId);

    // 调用接口查询状态
    const { useFolderApi } = await import("~/api/folder");
    const { queryTaskStatus } = useFolderApi;
    const response = await queryTaskStatus(taskIds);

    // 更新 tableData 中对应的数据
    if (response && Array.isArray(response)) {
      response.forEach((statusItem) => {
        const targetIndex = tableData.value.findIndex(
          (item) => item.taskId === statusItem.taskId
        );
        if (targetIndex !== -1) {
          // 更新对应记录的状态和进度
          tableData.value[targetIndex] = {
            ...tableData.value[targetIndex],
            transcriptionStatus:
              statusItem.status === "COMPLETED"
                ? 1
                : statusItem.status === "FAILED_PERMANENT"
                  ? -1
                  : 0,
            progress: statusItem.progress || 0,
            duration: statusItem.duration || 0
          };
        }
      });
    }

    // 2秒后继续下一次轮询
    statusPollingTimer = setTimeout(() => {
      startTaskStatusPolling();
    }, 6000);
  } catch (error) {
    stopTaskStatusPolling();
    // statusPollingTimer = setTimeout(() => {
    //   startTaskStatusPolling();
    // }, 10000);
  }
};

onUnmounted(() => {
  stopTaskStatusPolling();
});
</script>

<style scoped>
:deep(.el-table-v2__header-cell-text) {
  @apply text-fontColor;
  font-weight: 400;
}

:deep(.mobile .el-table-v2__body) > div:nth-child(1) {
  overflow: auto !important;
}
:deep(.mobile .el-table-v2__body) > div:nth-child(1)::-webkit-scrollbar {
  display: none;
}

:deep(.el-table-v2__header-row) {
  @apply border-borderColor;
}

:deep(.el-table-v2__row) {
  @apply cursor-pointer border-boxBgColor;
}
:deep(.el-table-v2__header-row) {
  @apply border-boxBgColor;
}

:deep(.el-table-v2__row):hover {
  background: rgba(52, 112, 255, 0.03);
}

:deep(.customer-button) {
  @apply rounded-lg border-0 bg-mainColor-600 px-3 py-2.5 text-sm text-mainColor-900 hover:opacity-80;
}

:deep(.del-button) {
  @apply !bg-subColor-normal !bg-opacity-15 !text-subColor-normal;
}

:deep(.is-checked .el-checkbox__inner) {
  @apply border-mainColor-900 bg-mainColor-900;
}

:deep(.is-indeterminate .el-checkbox__inner) {
  @apply border-mainColor-900 bg-mainColor-900;
}
:deep(.el-table-v2__row:has(.el-table-v2__row-cell:first-child .selectRow)) {
  @apply bg-hoverColor-normal;
}
:deep(.el-table-v2__row:has(.el-table-v2__row-cell:first-child .disableRow)) {
  @apply !cursor-not-allowed;
}
:deep(.el-checkbox__inner) {
  @apply h-4 w-4;
}
:deep(.el-checkbox__inner::after) {
  @apply h-2 w-1;
  left: 0.3125rem;
}
:deep(.el-checkbox__input.is-indeterminate .el-checkbox__inner::before) {
  top: 0.375rem;
}
.common-select {
  @apply me-2 flex cursor-pointer items-center rounded-lg px-1.5 py-1 hover:bg-[#ECECEC] sm:me-4;
}
</style>
<style>
body[dir="rtl"] .el-table-v2__row-cell {
  direction: rtl !important;
}
body[dir="rtl"] .el-table-v2__header-cell {
  direction: rtl !important;
}
</style>
