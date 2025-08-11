<template>
  <div
    class="min-h-[9.25rem] w-[13.625rem] rounded bg-mainColor-300 px-[1.25rem] py-[1rem]"
    v-if="isItDue"
  >
    <div class="mb-[0.875rem] flex items-center">
      <span>{{ t("AccountSettingsPage.basicversion") }}</span>
    </div>
    <div
      class="mb-[0.625rem] h-[0.5rem] w-full rounded border bg-mainColor-600"
    >
      <div
        class="h-[0.5rem] rounded bg-mainColor-900"
        :style="{ width: progress }"
      ></div>
    </div>
    <div class="mb-[1.625rem]" v-loading="loading">
      {{
        t("AccountSettingsPage.daily", {
          start: dailyCount.todayCount,
          end: dailyCount.limitCount
        })
      }}
    </div>
    <div class="flex justify-center">
      <button
        class="min-h-[2rem] w-[11rem] rounded-full bg-mainColor-900 text-xs font-semibold text-white"
        @click="upgrade"
      >
        {{ t("AccountSettingsPage.upgradetoPro") }}
      </button>
    </div>
  </div>
  <div
    class="min-h-[9.25rem] w-[13.625rem] rounded bg-mainColor-300 px-[1.25rem] py-[1rem]"
    v-else
  >
    <div class="mb-[0.5rem] flex items-center font-bold text-black">
      <span>{{
        selectPlanStatus === 2
          ? t("AccountSettingsPage.proAnnual")
          : t("AccountSettingsPage.proMonthly")
      }}</span>
    </div>
    <div class="mb-[1.625rem]">
      {{ t("AccountSettingsPage.yourSubscription") }}
      {{ getTime(endTime) }}
    </div>
    <div class="flex justify-center">
      <button
        class="min-h-[1.625rem] w-[11.25rem] rounded-full bg-[#E1EAFF] text-xs font-semibold text-mainColor-900"
        @click="manageSubscription"
      >
        {{ t("AccountSettingsPage.manageSubscription") }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmits, defineExpose } from "vue";
import { useI18n } from "vue-i18n";
import { useSubscript } from "~/components/layout/header/useSubscript";
const emits = defineEmits(["change"]);
const { t } = useI18n();
import { useSubscriptionStore } from "~/stores/useSubscriptionStore";
const subscriptionStore = useSubscriptionStore();
import { useUserStore } from "~/stores/useUserStore";
import { useSubscribeVersion } from "~/components/subscriptionUpgrade/useSubscribeVersion";
const userStore = useUserStore();
const { getTime } = useTime();
const { paymentManageUser } = useSubscribeVersion();
const dailyCount = ref<{ todayCount: number; limitCount: number }>({
  todayCount: 0,
  limitCount: 0
});
const progress = ref<string>("0");
const { fetchSubscript } = useSubscript();
const loading = ref<boolean>(false);
const isItDue = computed(() => {
  return subscriptionStore.isItDue;
});
const endTime = computed(() => {
  return subscriptionStore.subscriptionDetail?.endTime;
});
const selectPlanStatus: any = computed(() => {
  return subscriptionStore.subscriptionDetail?.subscriptionCycle;
});
const userInfo: any = computed(() => {
  return typeof userStore.userInfo === "object" && userStore.userInfo !== null
    ? (userStore.userInfo as any).userInfoVO
    : {};
});
onMounted(async () => {});
const getDailyCount = async () => {
  loading.value = true;
  const res = await fetchSubscript();
  if (res) {
    dailyCount.value = res as any;
    let percent =
      (
        (dailyCount.value.todayCount /
          (dailyCount.value.todayCount > dailyCount.value.limitCount
            ? dailyCount.value.todayCount
            : dailyCount.value.limitCount)) *
        100
      ).toFixed(2) + "%";
    progress.value = percent;
  }
  loading.value = false;
};
const manageSubscription = async () => {
  const res: any = await paymentManageUser();
  if (res) {
    window.location.href = res;
  }
};
const upgrade = () => {
  emits("change");
};
defineExpose({
  getDailyCount
});
</script>
<style scoped></style>
