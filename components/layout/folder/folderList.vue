<template>
  <div class="">
    <transition
      @enter="enter!"
      @leave="leave!"
      @before-leave="beforeLeave!"
      @before-enter="beforeEnter!"
      @after-enter="afterEnter!"
      @after-leave="afterLeave!"
    >
      <TransitionGroup
        tag="ul"
        appear
        v-if="isExpanded"
        enter-active-class="transition duration-100 ease-in"
        enter-from-class="opacity-0"
        leave-active-class="transition duration-100 ease-out"
        leave-to-class="opacity-0"
      >
        <li
          v-for="(folder, index) in folders"
          :key="folder.id"
          @click="handleClick(folder)"
          @mouseenter="handleMouseEnter2(folder, index)"
          @mouseleave="handleMouseLeave()"
          class="mt-4 flex h-8 cursor-pointer items-center justify-between rounded-lg py-1.5 pe-0.5 ps-9 text-sm font-medium transition-all duration-300 hover:bg-boxBgColor"
          :class="{
            selected:
              isMounted &&
              selectedFolder?.id === folder.id &&
              route.path.includes('/folder')
          }"
        >
          <div
            :title="folder.folderName"
            class="me-3 line-clamp-1 w-full text-ellipsis"
          >
            <span class="break-all">{{ folder.folderName }}</span>
          </div>

          <el-popover
            trigger="click"
            placement="bottom-end"
            teleported
            :ref="setPopoverRef"
            transition="el-zoom-in-top"
            :show-arrow="false"
            :popper-style="{
              padding: '0',
              borderRadius: '0.5rem',
              boxShadow: '0 0 0.625rem 0 rgba(0,0,0,0.14)',
              minWidth: '8.125rem',
              width: 'auto',
              border: 0
            }"
            :offset="4"
            @mouseenter="handleMouseEnter(folder)"
            @show="handleShowed"
            @hide="handleHidePopover"
          >
            <template #reference>
              <div @click.stop="handleShowed" class="h-[1.625rem] w-[1.625rem]">
                <span
                  v-if="showPopover.includes(folder.id) || isMobile"
                  class="flex h-[1.625rem] w-[1.625rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-lg transition-all duration-300 hover:bg-menuColor-deepen"
                >
                  <span class="iconfont icon-suolve"></span>
                </span>
              </div>
            </template>

            <div v-if="showPopover.includes(folder.id)" class="w-full py-2.5">
              <div
                @click.stop="
                  showPopover = [];
                  $emit('rename', folder);
                "
                class="mb-2 flex h-8 w-full cursor-pointer items-center px-[1.5em] transition-all duration-100 hover:bg-hoverColor-normal"
              >
                <span
                  class="iconfont icon-a-bianjizhongmingming relative top-[-1px] me-2.5 text-sm text-fontColor"
                ></span>
                <span>{{ t("HomePage.rename") }}</span>
              </div>
              <div
                @click.stop="
                  showPopover = [];
                  $emit('delete', folder);
                "
                class="flex h-8 w-full cursor-pointer items-center px-[1.5em] transition-all duration-100 hover:bg-hoverColor-normal"
              >
                <span
                  class="iconfont icon-lajixiang relative top-[-1px] me-2.5 text-sm text-fontColor"
                ></span>
                <span>{{ t("HomePage.delete") }}</span>
              </div>
            </div>
          </el-popover>
        </li>
      </TransitionGroup>
    </transition>
  </div>
</template>

<script setup lang="ts">
import type { Folder } from "~/api/type/folder";
import { useFolderListStore, useFolderStore } from "~/stores/useFolderStore";
import { usePopover } from "./usePopover";
import { useAnimation } from "~/components/layout/folder/useAnimation";
import { ref } from "vue";

const { t } = useI18n();

const props = defineProps<{
  folders: Folder[];
  isExpanded: boolean;
}>();

const emits = defineEmits(["rename", "delete", "rowClick"]);

const handleClick = (item: Folder) => {
  emits("rowClick", item);
};

const { selectedFolder } = storeToRefs(useFolderStore());

const route = useRoute();

const popoverRefs = shallowRef<any>([]);
const setPopoverRef = (el: any) => {
  if (el) {
    popoverRefs.value.push(el);
  }
};
const {
  showPopover,
  handleHidePopover,
  handleMouseEnter,
  handleMouseLeave,
  handleShowed,
  isPopoverShowed
} = usePopover();
const lastIndex = ref(-1);
const handleMouseEnter2 = (item: Folder, index: number) => {
  if (showPopover.value.includes(item.id)) return;
  if (lastIndex.value === -1) lastIndex.value = index;
  if (isPopoverShowed) {
    popoverRefs.value[lastIndex.value]?.hide();
  }
  handleMouseEnter(item);
  lastIndex.value = index;
};

const { beforeEnter, enter, leave, afterEnter, afterLeave, beforeLeave } =
  useAnimation();

const scrollToSelectedFolder = async () => {
  await nextTick();
  const selectedElement = document.querySelector(".bg-boxBgColor");

  if (selectedElement) {
    const container =
      selectedElement.closest(".overflow-y-auto") ||
      selectedElement.parentElement;

    if (container) {
      selectedElement.scrollIntoView({
        block: "center"
      });
    }
  }
};

const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});

const isMobile = inject<Ref<boolean>>("isMobile");

const isScroll = ref(false);
const { isJumpFromHome } = storeToRefs(useFolderListStore());
watchEffect(() => {
  if (!isScroll.value && props.folders.length > 0 && !isJumpFromHome.value) {
    scrollToSelectedFolder();
    isScroll.value = true;
  }
  if (props.folders.length > 0) {
    // 从home 跳转过来不自动滚动
    isJumpFromHome.value = false;
    isScroll.value = false;
  }
});
</script>

<style scoped>
.selected {
  @apply bg-menuColor-normal;
}
.selected span {
  @apply font-medium;
}
</style>
