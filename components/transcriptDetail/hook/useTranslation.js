import { ref } from "vue";

export default function useTranslation(emit) {
  // 翻译相关状态
  const langId = ref("");
  const langChooseV1Ref = ref(null);
  const langChoosePopoverRef = ref(null);
  const upgradeTipRef = ref(null);

  // 处理语言选择
  const handleTranslateLangChoose = ({ id = "", name = "", langCode = "" }) => {
    langId.value = id;
    langChoosePopoverRef.value?.hide();
    emit("translate", { langId: id, langCode });
  };
  // 弹出语言选择框时，滚动到已选择的语言
  const handleLangPopShow = () => {
    setTimeout(() => {
      langChooseV1Ref.value?.scrollToSelectedLanguage();
    }, 50);
  };
  const upgradeVisibleHeight = ref(0);
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const rect = entry.intersectionRect;
          let fontSize = document.documentElement.style.fontSize;
          if (fontSize) {
            fontSize = parseFloat(fontSize);
          } else {
            fontSize = 16;
          }
          // 更新可见区域可视化
          if (rect.height > 0) {
            const boxHeight = document.querySelector(".vue-recycle-scroller");
            const boxInnerHeight = document.querySelector(
              ".vue-recycle-scroller__item-wrapper"
            );
            let diff = 0;
            const h1 = boxHeight?.clientHeight || 0;
            const h2 = +boxInnerHeight.style.minHeight.replace("px", "");
            if (h1 > h2) {
              diff = h1 - h2;
              console.log("🚀 ~ file: 外层与内层  差值 🚀", diff);
            }
            upgradeVisibleHeight.value = (
              (rect.height + diff) /
              fontSize
            ).toFixed(3);
          } else {
            upgradeVisibleHeight.value = 0;
          }
        } else {
          upgradeVisibleHeight.value = 0;
        }
      });
    },
    {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    }
  );
  const handleScrollEnd = () => {
    nextTick(() => {
      // 开始观察目标元素
      upgradeTipRef.value && observer.observe(upgradeTipRef.value);
    });
  };
  return {
    langId,
    langChooseV1Ref,
    langChoosePopoverRef,
    handleTranslateLangChoose,
    handleLangPopShow,
    handleScrollEnd,
    upgradeVisibleHeight,
    upgradeTipRef
  };
}
