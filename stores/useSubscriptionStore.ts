import { defineStore } from "pinia";
import { Value } from "sass";
import { ref } from "vue";

export const useSubscriptionStore = defineStore(
  "subscription",
  () => {
    const subscriptionDetail = ref<any>({});
    const userStore = useUserStore();
    const userInfo =
      typeof userStore.userInfo === "object" && userStore.userInfo !== null
        ? (userStore.userInfo as any).userInfoVO
        : {};
    const isFristSubscription = ref<boolean>(false); //true 第一次 false 非第一次
    const timer = ref<any>(null);
    async function setSubscriptionDetail(subscription: any) {
      subscriptionDetail.value = subscription;
      if (isItDue.value) {
        // 未购买或已到期, 调用可使用次数
        const { useSubscription } = await import("~/api/subscription");
        const res: any = await useSubscription.transcriptionCount();
        updateSubScriptCount(res as any);
      }
    }
    function setPaymentGetUser(val: boolean) {
      isFristSubscription.value = val;
    }

    function getStatusUserId() {
      getStatusUserIdFetch();
      if (timer.value) {
        clearTimeout(timer.value);
        timer.value = null;
        return;
      }
      updateData();
    }
    async function getStatusUserIdFetch() {
      const { useSubscription } = await import("~/api/subscription");
      const res = await useSubscription.statusUserId(userInfo.userid);
      setSubscriptionDetail(res);
    }
    const updateDataTime = computed(() => {
      if (subscriptionDetail.value?.endTime) {
        const targetTimestamp = new Date(
          subscriptionDetail.value?.endTime
        ).getTime();
        const currentTimestamp = Date.now();
        const diffInSeconds = (targetTimestamp - currentTimestamp) / 1000;
        if (diffInSeconds > 0) {
          return diffInSeconds;
        } else {
          return false;
        }
      }
      return false;
    });

    const updateData = () => {
      if (updateDataTime.value) {
        timer.value = setTimeout(async () => {
          getStatusUserIdFetch();
        }, updateDataTime.value);
      }
    };
    // 免费用户
    const subscriptionStatus = ref<-1 | 1>(-1);
    const isFreeUser = computed(() => {
      return isItDue.value;
    });

    //订阅计划是否到期
    const isItDue = computed(() => {
      if (subscriptionDetail.value?.endTime) {
        return formHasItExpired(subscriptionDetail.value.endTime);
      }
      return true;
    });
    // 今日转录次数
    const todayCount = ref(0);
    // 今日允许转录次数
    const limitCount = ref(0);

    const updateSubScriptCount = (obj: {
      todayCount: number;
      limitCount: number;
      subscriptionStatus: -1 | 1;
    }) => {
      if (obj.subscriptionStatus === -1) {
        todayCount.value = obj.todayCount;
        limitCount.value = obj.limitCount;
      }
      subscriptionStatus.value = obj.subscriptionStatus;
    };

    const isNoTimes = computed(() => {
      return isFreeUser.value && todayCount.value >= limitCount.value;
    });
    // 检查是否订阅过期
    const formHasItExpired = (val: string) => {
      const now = new Date();
      const endTime = new Date(val);
      //已过期
      if (now > endTime) {
        return true;
      } else if (now < endTime) {
        //未过期
        return false;
      } else {
        return false;
      }
    };
    return {
      subscriptionDetail,
      setSubscriptionDetail,
      updateSubScriptCount,
      setPaymentGetUser,
      isFreeUser,
      todayCount,
      limitCount,
      isNoTimes,
      isItDue,
      getStatusUserId,
      isFristSubscription
    };
  },
  {
    persist: true
  }
);
