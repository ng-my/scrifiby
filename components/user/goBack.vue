<template>
  <!-- 顶部返回按钮 -->
  <div @click="jumpTo()" class="w-full px-[1.5rem] pt-[1.5rem]">
    <span class="flex cursor-pointer items-center text-[1rem] text-gray-400">
      <svg
        class="me-1 h-4 w-4"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts" setup>
const localePath = useLocalePath();
const props = withDefaults(
  defineProps<{
    noJump?: boolean;
    path?: string;
  }>(),
  {
    noJump: false
  }
);
const { noJump, path } = props;
const router = useRouter();
const jumpTo = () => {
  if (noJump) {
    return;
  }
  if (path) {
    router.push(localePath(path));
  } else {
    router.back();
  }
};
</script>

<style scoped></style>

<style scoped></style>
