export const useVisitor = () => {
  const visitorId = ref("");

  const getVisitorId = async () => {
    const cookie = useCookie('fp')
    if (cookie.value) {
      visitorId.value = cookie.value;
      return;
    }
    const { load } = await import("@fingerprintjs/fingerprintjs");
    const fp = await load({}); // 替换为你的 Key
    const result = await fp.get();
    visitorId.value = result.visitorId;
    cookie.value = visitorId.value;
  };

  onMounted(() => {
    getVisitorId();
  });

  return {
    visitorId,
    getVisitorId
  };
};
