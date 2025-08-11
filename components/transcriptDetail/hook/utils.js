import { useIntervalFn } from "@vueuse/core";

/**
 * 根据段落ID滚动到指定段落
 * @param {Number} paraIndex 段落索引
 * @param {String} paraId 段落ID
 * @param {Object} dynamicScroller 虚拟滚动组件引用
 * @returns {Promise} 滚动完成的Promise
 */
export const scrollToParagraph = async (paraIndex, paraId, dynamicScroller) => {
  if (!dynamicScroller) return false;

  let isExistVirtualItemWrap = document.querySelector(
    `.virtual-item-wrap[data-pid="${paraId}"][data-active="true"]`
  );
  
  if (isExistVirtualItemWrap) {
    return true;
  }
  
  dynamicScroller.scrollToItem(paraIndex);
  let count = 0;
  
  return new Promise((resolve) => {
    const { pause } = useIntervalFn(() => {
      count++;
      let isExistVirtualItemWrap = document.querySelector(
        `.virtual-item-wrap[data-pid="${paraId}"][data-active="true"]`
      );
      if (isExistVirtualItemWrap || count >= 20) {
        // 暂停 清理定时器
        pause();
        return resolve(true);
      }
    }, 50);
  });
}; 