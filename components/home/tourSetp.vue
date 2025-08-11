<template>
  <div class="">
    <div class="mb-7 flex flex-col items-center justify-between">
      <span class="mb-2 flex w-full text-base">{{ title }}</span>
      <span class="text-sm">{{ content }}</span>
    </div>

    <div class="flex items-center justify-between">
      <span>{{ step }}/3</span>
      <el-button @click="handleNext">{{ buttonName }}</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const { step } = storeToRefs(useTourStore());
const { nextStep, nextStepWithOperation } = useTourStore();

const isMobile = inject<Ref<boolean>>("isMobile", ref(false));

const { userInfo } = storeToRefs(useUserStore());
const handleNext = async () => {
  if (isMobile.value && [1, 2].includes(step.value!)) {
    nextStepWithOperation();
  } else {
    if (step.value === 3) {
      //
      const { userApi } = await import("~/api/user");
      userApi.completeGuide();
      if ((userInfo.value as any)?.userInfoVO?.beginnersTutorial) {
        (userInfo.value as any).userInfoVO.beginnersTutorial = false;
      }
    }
    nextStep();
  }
};

const title = computed(() => {
  return t("HomePage.tour.step" + step.value + ".title");
});
const content = computed(() => {
  return t("HomePage.tour.step" + step.value + ".content");
});
const buttonName = computed(() => {
  return step.value === 3 ? t("HomePage.tour.finish") : t("HomePage.tour.next");
});
</script>

<style scoped></style>
