<template>
  <div class="flex flex-col ps-[1.5rem] md:flex-row" v-show="userInfo.userid">
    <span
      class="meadia-hidden text-xl font-semibold opacity-0 md:inline-block"
      >{{ t("AccountSettingsPage.accountSetting") }}</span
    >
    <div class="flex flex-1 flex-col items-center">
      <div class="mt-[1.25rem] flex w-full justify-center md:flex">
        <div class="flex flex-1 justify-end">
          <div
            class="w-[11.25rem] pe-[1rem] text-start text-[1rem] text-fontColor"
          >
            {{ t("AccountSettingsPage.email") }}
          </div>
        </div>
        <div class="flex-1 flex flex-wrap break-all">
          <span>
            {{ userFrom.email }}
          </span>
        </div>
      </div>
      <div
        class="mt-[1.625rem] flex w-full justify-center"
        v-if="!userInfo.googleUser"
      >
        <div class="flex flex-1 justify-end">
          <div
            class="w-[11.25rem] pe-[1rem] text-start text-[1rem] text-fontColor"
          >
            {{ t("AccountSettingsPage.password") }}
          </div>
        </div>
        <div class="flex-1 flex flex-wrap">
          <span
            class="cursor-pointer text-mainColor-900 "
            @click="reSetPassWord"
            >{{ t("AccountSettingsPage.resetPassword") }}</span
          >
        </div>
      </div>
    </div>
    <span
      class="meadia-hidden text-xl font-semibold opacity-0 md:inline-block"
      >{{ t("AccountSettingsPage.accountSetting") }}</span
    >
  </div>
  <div
    v-show="!userInfo.userid"
    class="flex flex-1 flex-col items-center justify-center bg-white"
  >
    <div class="mb-[1rem] text-[1.5rem] font-semibold text-gray-900">
      {{ t("AccountSettingsPage.notFund") }}
    </div>
    <div class="text-[1rem] text-gray-500">
      {{ t("AccountSettingsPage.couldntFind") }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useUserStore } from "~/stores/useUserStore";
const emit = defineEmits(["change"]);
const userStore = useUserStore();
const { t } = useI18n();
const userInfo: any = computed(() => {
  return typeof userStore.userInfo === "object" && userStore.userInfo !== null
    ? (userStore.userInfo as any).userInfoVO
    : {};
});
const userFrom = ref<{ email: string; id: string }>({
  email: userInfo.value.email,
  id: userInfo.value.userid
});
const reSetPassWord = () => {
  emit("change");
};
</script>
<style scoped lang="scss">
@media (max-width: 900px) {
  .meadia-hidden {
    display: none;
  }
}
</style>
