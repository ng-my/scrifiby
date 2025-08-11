<template>
  <div
    class="box-border flex h-screen w-full flex-col overflow-y-auto sm:overflow-y-hidden"
  >
    <div class="sticky top-0 z-10 flex flex-col-reverse sm:flex-col">
      <!-- Header -->
      <layout-upgrade ref="upgrade" v-if="isFreeUser" />

      <layout-header />
    </div>

    <div class="flex flex-1 flex-col overflow-y-hidden md:w-full md:flex-row">
      <!-- Left Sidebar -->
      <layout-menu />

      <!-- Right Main Content (Slot) -->
      <main class="media-heght flex flex-1 flex-col md:w-[0]">
        <slot></slot>
      </main>
    </div>

    <subscription-modal v-if="showSubModal" v-model="showSubModal" />
  </div>
</template>

<script setup lang="ts">
import Utils from "~/utils/tools";

const isMobile = useState("isMobile", () => ref(false));
const checkDeviceType = () => {
  return /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};
const checkWindowSize = () => {
  return window.innerWidth < 768;
};
const updateMobileStatus = () => {
  isMobile.value = checkDeviceType() || checkWindowSize();
};

const { subscriptionDetail, isItDue, subscriptionStatus } = storeToRefs(
  useSubscriptionStore()
);

const isFreeUser = computed(() => {
  if (subscriptionDetail.value?.endTime) {
    return isItDue.value;
  }

  if (subscriptionStatus.value !== null) {
    return [-1, 2].includes(subscriptionStatus.value);
  }

  return false;
});

const router = useRouter();
const localePath = useLocalePath();
const showSubModal = ref(false);
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

const upgrade = useTemplateRef("upgrade");
watchEffect(async () => {
  await nextTick();
  if (
    process.client &&
    isFreeUser.value &&
    upgrade.value &&
    localStorage.getItem("noTimes")
  ) {
    handleJump();
    localStorage.removeItem("noTimes");
  }
});

onMounted(() => {
  updateMobileStatus();
  window.addEventListener("resize", updateMobileStatus);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateMobileStatus);
});
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .media-heght {
    height: 100%;
  }
}
</style>
