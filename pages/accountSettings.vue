<template>
  <TopLeftLayout>
    <div
      class="scrollbar-hide scrollbar-hide mb-[2rem] flex h-full flex-1 flex-col overflow-hidden overflow-y-scroll bg-white"
    >
      <!-- 顶部标题和Tabs -->
      <div class="tabs-col-media flex flex-row border-b ps-[1.5rem] pt-6">
        <div
          class="media-item-center mb-[1.5rem] items-center text-xl font-semibold md:mb-[1rem]"
        >
          {{ t("AccountSettingsPage.accountSetting") }}
        </div>
        <div class="flex w-full flex-1 justify-center">
          <div
            class="flex flex-1 font-medium"
            :class="{ 'justify-end': item.id === 1 }"
            v-for="item in tabs"
            :key="item.id"
          >
            <div
              :class="{
                'w-[11.25rem]': item.id === 1,
                flex: item.id === 1,
                'text-blue-600': activeTab === item.id,
                'text-gray-700': activeTab !== item.id,
                'hover:text-blue-600': activeTab !== item.id
              }"
            >
              <span
                class="inline-block h-full cursor-pointer border-b-2 border-mainColor-900 pb-[1rem]"
                :class="{ 'border-white': activeTab !== item.id }"
                @click="changeTable(item.id)"
              >
                {{ item.name }}</span
              >
            </div>
          </div>
        </div>
        <div
          class="media-item-center meadia-hidden mb-[1.5rem] hidden items-center text-xl font-semibold opacity-0 md:mb-[1rem] md:inline-block"
        >
          {{ t("AccountSettingsPage.accountSetting") }}
        </div>
      </div>
      <div class="relative flex h-full flex-col" v-loading="loading">
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
const activeTab: Ref<number> = ref(1);
const tabs: Ref<Tab[]> = ref([
  { id: 1, name: t("AccountSettingsPage.account") },
  { id: 2, name: t("AccountSettingsPage.subscription") }
]);
const accountStatus: Ref<number> = ref(1);
const loading = ref<boolean>(false);
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
</style>
