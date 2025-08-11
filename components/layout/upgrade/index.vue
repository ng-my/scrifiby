<template>
  <div
    v-if="isMounted"
    class="customer-bg sm:rounded-0 flex w-full flex-col items-center justify-between rounded-b-[1.25rem] px-4 py-3.5 text-sm text-mainColor-900 sm:flex-row sm:rounded-[0] sm:px-5"
  >
    <div class="text-black sm:flex sm:items-center sm:text-mainColor-900">
      <span class="mb-2 inline-block w-full sm:mb-0 sm:contents sm:w-auto">{{
        t("HomePage.version")
      }}</span>
      <span
        class="mb-2 inline-block w-full text-xs sm:mb-0 sm:contents sm:w-auto sm:text-sm"
        >{{
          t("HomePage.times", {
            times: isMounted ? limitCount : 0,
            left: isMounted
              ? limitCount - todayCount > 0
                ? limitCount - todayCount
                : 0
              : 0
          })
        }}</span
      >
      <span class="inline-block w-full text-center sm:contents sm:w-auto">{{
        t("HomePage.tips", { update: "Pro" })
      }}</span>
    </div>

    <div
      @click="handleJump"
      class="mt-2 flex h-[2rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-[2rem] bg-mainColor-900 px-7 text-sm font-medium text-white duration-75 ease-linear hover:bg-opacity-80 hover:text-opacity-80 sm:mt-0"
    >
      <client-only>
        <el-image class="me-2 h-7 w-7" src="/assets/images/home/rocket.svg" />
      </client-only>
      {{ t("HomePage.update") }}
    </div>
  </div>
  <subscription-modal v-model="showSubModal" />
</template>

<script lang="ts" setup>
import { useSubscript } from "~/components/layout/header/useSubscript";

const { t } = useI18n();
const { todayCount, limitCount, isFreeUser } = storeToRefs(
  useSubscriptionStore()
);
const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});

const router = useRouter();
const localePath = useLocalePath();

const isMobile = inject<Ref<boolean>>("isMobile", ref(false));
const handleJump = () => {
  if (isMobile.value) {
    router.push(localePath("/getPro"));
    return;
  }
  showSubModal.value = true;
};

const { fetchSubscript } = useSubscript();
fetchSubscript();

const showSubModal = ref(false);
</script>

<style scoped>
.customer-bg {
  @apply bg-[#DFEAFF];
}
</style>
