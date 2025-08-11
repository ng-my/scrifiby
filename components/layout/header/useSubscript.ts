export const useSubscript = () => {
  const { updateSubScriptCount } = useSubscriptionStore();

  const fetchSubscript = async () => {
    const { useSubscription } = await import("~/api/subscription");
    const res: any = await useSubscription.transcriptionCount();
    updateSubScriptCount(res as any);
    return res;
  };

  return {
    fetchSubscript
  };
};
