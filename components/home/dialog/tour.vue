<template>
  <div class="customer-dialog">
    <el-dialog v-model="visible">
      {{ t('HomePage.tour.step0.title') }}
      {{ t('HomePage.tour.step0.tip') }}
      {{ t('HomePage.tour.step0.content') }}
      <el-button @click="handleClick" type="primary">{{t('HomePage.tour.step0.next')}}</el-button>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  modelValue: boolean,
}>()

const emit = defineEmits(['update:modelValue'])

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const {nextStep} = useTourStore()
const handleClick = () => {
  visible.value = false
  nextStep()
}

</script>

<style scoped>
:deep(.customer-dialog) {
}
:deep(.el-dialog) {
  @apply w-[20.625rem] p-5 !rounded-lg;
  box-shadow: 0 0 0.625rem 0 rgba(0,0,0,0.14);
}
:deep(.el-dialog__header) {
  @apply p-0 text-base font-medium mb-5;
}
:deep(.el-dialog__headerbtn) {
  height: 4.125rem;
}
:deep(.el-dialog__headerbtn .el-dialog__close) {
  @apply text-black
}
:deep(.el-dialog__footer) {
  @apply mt-11 pt-0
}
</style>
