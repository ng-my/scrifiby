<template>
  <div
    v-if="isMounted"
    class="customer-bg sm:rounded-0 flex w-full flex-col items-center justify-between rounded-b-[1.25rem] px-4 py-3.5 text-sm text-mainColor-900 sm:flex-row sm:rounded-[0] sm:px-5"
  >
    <div class="w-full text-black sm:flex sm:items-center sm:text-white">
      <span
        class="mb-2 inline-block w-full sm:mb-0 sm:contents sm:w-auto sm:text-sm"
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
      <span
        class="inline-block w-full font-medium sm:contents sm:w-auto sm:font-normal"
        >{{ t("HomePage.tips", { update: "Pro" }) }}</span
      >
    </div>

    <div
      @click="handleClick"
      class="mt-2 flex h-[2.25rem] w-[20rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-[2rem] bg-mainColor-900 px-7 text-sm font-medium text-white duration-75 ease-linear hover:bg-mainColor-990 sm:mt-0 sm:h-[2rem] sm:w-auto sm:bg-[#B588F5] sm:hover:bg-[#9A6EF2]"
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
import Utils from "~/utils/tools";

const { t } = useI18n();
const { todayCount, limitCount, isFreeUser } = storeToRefs(
  useSubscriptionStore()
);
const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});

const router = useRouter();
const route = useRoute();
const localePath = useLocalePath();

const isMobile = useState("isMobile");
const userStore = useUserStore();
const userNameEmail = computed(() => {
  try {
    return userStore.userInfo &&
      typeof userStore.userInfo === "object" &&
      "userInfoVO" in userStore.userInfo
      ? (userStore.userInfo as any).userInfoVO?.email || ""
      : "";
  } catch (e) {
    return "";
  }
});

const handleClick = () => {
  if (!userNameEmail.value) {
    setTimeout(() => {
      router.push({
        path: localePath("/user/signup"),
        query: { type: "noLogin" }
      });
    }, 300);
    return;
  }

  handleJump();
};

const handleJump = async () => {
  if (isMobile.value || Utils.isMobile()) {
    await router.isReady();
    setTimeout(() => {
      navigateTo(localePath("/getPro"));
    }, 500);
    return;
  }
  showSubModal.value = true;
};

const { fetchSubscript } = useSubscript();
fetchSubscript();

const showSubModal = ref(false);
const showSubHandle = () => {
  showSubModal.value = true;
};

defineExpose({
  handleJump,
  showSubHandle
});
</script>

<style scoped>
.customer-bg {
  background: linear-gradient(90deg, #3470ff 0%, #9534e6 100%);
}
@media screen and (max-width: 640px) {
  .customer-bg {
    background: #e9e4fc;
  }
}
</style>
