export const usePopover = () => {
  const showPopover = ref<String[]>([]);
  const isPopoverShowed = ref(false);

  const handleMouseEnter = (item: Record<any, any>) => {
    isPopoverShowed.value = false;
    showPopover.value = [item.id];
  };
  const handleMouseLeave = async () => {
    if (isPopoverShowed.value) return;
    showPopover.value = [];
  };
  const handleHidePopover = () => {
    isPopoverShowed.value = false;
  };
  const handleShowed = () => {
    isPopoverShowed.value = true;
  };

  return {
    showPopover,
    isPopoverShowed,
    handleMouseEnter,
    handleMouseLeave,
    handleHidePopover,
    handleShowed
  };
};
