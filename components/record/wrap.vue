<template>
  <client-only>
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class=""
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <record v-if="recordStatus === 1" />
    </transition>
  </client-only>
</template>

<script setup lang="ts">
const { recordStatus } = storeToRefs(useRecordStore());
const { endRecord } = useRecordStore();

const route = useRoute();
watchEffect(() => {
  if (route?.path?.includes("/user") && recordStatus.value === 1) {
    endRecord();
  }
});
</script>

<style scoped></style>
