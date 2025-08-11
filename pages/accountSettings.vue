<template>
  <TopLeftLayout>
    <div
      class="scrollbar-hide scrollbar-hide mb-[2rem] flex h-full flex-1 flex-col overflow-hidden overflow-y-scroll bg-white"
      v-loading="loading"
    >
      <div class="ps-[0rem] ps-[1.5rem] pt-6 text-[1.125rem] font-semibold">
        {{ t("AccountSettingsPage.accountSetting") }}
      </div>
      <!-- 顶部标题和Tabs -->
      <div class="tabs-col-media flex flex-row border-b ps-[1.5rem] pt-6">
        <div class="flex w-full flex-1">
          <div
            class="flex font-medium"
            v-for="item in tabs"
            :key="item.id"
            :class="{
              'flexControl md:justify-start': item.id === 1,
              'flex-1': item.id !== 1
            }"
          >
            <div
              :class="{
                'me-[3.75rem]': item.id === 1,
                flex: item.id === 1,
                'text-mainColor-900': activeTab === item.id,
                'text-black': activeTab !== item.id,
                'hover:text-mainColor-990': activeTab !== item.id
              }"
            >
              <span
                class="inline-block h-full cursor-pointer border-b-2 border-mainColor-900 pb-[1rem] font-bold"
                :class="{ 'border-white': activeTab !== item.id }"
                @click="changeTable(item.id)"
              >
                {{ item.name }}</span
              >
            </div>
          </div>
        </div>
        <!-- <div
          class="media-item-center meadia-hidden mb-[1.5rem] hidden items-center text-[0.875rem] font-semibold opacity-0 md:mb-[1rem] md:inline-block"
        >
          {{ t("AccountSettingsPage.accountSetting") }}
        </div> -->
      </div>
      <div class="relative flex h-full flex-col">
        <TransitionGroup name="fade" tag="div" class="flex h-full flex-col">
          <div
            v-if="activeTab === 1 && accountStatus === 1"
            key="account"
            class="flex h-full flex-col"
          >
            <AccountSettingsVue-Content @change="accountStatusChange(2)" />
          </div>
          <div
            v-else-if="activeTab === 1 && accountStatus === 2"
            key="setPassword"
          >
            <user-go-back @click="accountStatusChange(1)" noJump>
              {{ t("AccountSettingsPage.returnAccountSetting") }}
            </user-go-back>
            <user-set-password
              @change="accountStatusChange(1)"
              pageSource="reset"
              :agreeTerm="false"
              :path="route.fullPath"
            ></user-set-password>
          </div>
          <div
            v-if="activeTab === 2"
            key="subscribeVersion"
            class="flex flex-col"
          >
            <subscriptionUpgrade-subscribeVersion />
          </div>
        </TransitionGroup>
      </div>
    </div>
  </TopLeftLayout>
</template>
<script setup lang="ts">
import TopLeftLayout from "~/layouts/topLeftLayout.vue";
import { ref } from "vue";
import type { Ref } from "vue";
import { useSubscriptionStore } from "~/stores/useSubscriptionStore";
const subscriptionStore = useSubscriptionStore();
import { useI18n } from "vue-i18n";
import { useEmailStore } from "~/stores/useUserStore";
const eamilStore = useEmailStore();
const userStore = useUserStore();
const { t } = useI18n();
defineOptions({
  name: "accountSettings"
});
interface Tab {
  id: number;
  name: string;
}
definePageMeta({
  requireAuth: true
});
const route = useRoute();
const router = useRouter();
const localePath = useLocalePath();
const activeTab: Ref<number> = ref(0);
const tabs: Ref<Tab[]> = ref([
  { id: 1, name: t("AccountSettingsPage.account") },
  { id: 2, name: t("AccountSettingsPage.subscription") }
]);
const accountStatus: Ref<number> = ref(1);
const loading = ref<boolean>(true);
const changeTable = async (tab: number) => {
  activeTab.value = tab;
  await router.push({
    path: localePath(route.fullPath),
    query: { ...route.query, type: tab }
  });
};
const accountStatusChange = async (tab: number) => {
  accountStatus.value = tab;
  await router.push({
    path: localePath(route.fullPath),
    query: { ...route.query, accountStatusVal: tab }
  });
  if (tab === 2) {
    eamilStore.setSendCodeFlag(true);
  }
};

watch(
  () => route.fullPath,
  async () => {
    const type = route.query.type;
    if (typeof type === "string" && !isNaN(Number(type)) && type) {
      activeTab.value = Number(type);
    }
    const accountStatusVal = route.query.accountStatusVal;

    if (
      typeof accountStatusVal === "string" &&
      !isNaN(Number(accountStatusVal)) &&
      accountStatusVal
    ) {
      accountStatus.value = Number(accountStatusVal);
    } else {
      accountStatus.value = 1;
    }
  },
  { deep: true }
);

onMounted(async () => {
  const subscriptionStore = useSubscriptionStore();
  await subscriptionStore.getStatusUserIdFetch();
  const type = route.query.type;
  if (typeof type === "string" && !isNaN(Number(type)) && type) {
    activeTab.value = Number(type);
  }
  const accountStatusVal = route.query.accountStatusVal;
  if (
    typeof accountStatusVal === "string" &&
    !isNaN(Number(accountStatusVal)) &&
    accountStatusVal
  ) {
    accountStatus.value = Number(accountStatusVal);
  }
  loading.value = false;
});
</script>
<style scoped>
/* 隐藏滚动条 */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

@media (max-width: 900px) {
  .media-item-center {
    display: flex;
    justify-content: center;
  }
}
@media (max-width: 900px) {
  .tabs-col-media {
    flex-direction: column;
  }
}
@media (max-width: 900px) {
  .meadia-hidden {
    display: none;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-leave-active {
  position: absolute;
  width: 100%;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

@media (max-width: 768px) {
  .flexControl {
    /* flex: 1; */
    /* justify-content: center; */
  }
}
</style>
