import { ref, onMounted, onUnmounted, type Ref } from "vue";

/**
 * 元素尺寸信息类型
 */
export interface ElementSize {
  width: number;
  height: number;
}

/**
 * 监听元素尺寸变化的Hook
 * @param targetRef 要监听的元素引用
 * @param options 配置选项
 * @returns 包含元素尺寸的响应式对象
 */
export function useElementSize(
  targetRef: Ref<HTMLElement | null>,
  options: {
    /** 是否立即获取初始尺寸 */
    immediate?: boolean;
    /** 是否包含内边距 */
    includePadding?: boolean;
    /** 是否包含边框 */
    includeBorder?: boolean;
    /** 是否包含外边距 */
    includeMargin?: boolean;
    /** 尺寸变化回调函数 */
    onChange?: (size: ElementSize) => void;
  } = {}
): Ref<ElementSize> {
  const {
    immediate = true,
    includePadding = true,
    includeBorder = false,
    includeMargin = false,
    onChange
  } = options;

  const size = ref<ElementSize>({ width: 0, height: 0 });
  let resizeObserver: ResizeObserver | null = null;

  // 计算元素尺寸
  const calculateSize = (): ElementSize => {
    if (!targetRef.value) return { width: 0, height: 0 };

    const style = getComputedStyle(targetRef.value);
    let width = targetRef.value.clientWidth;
    let height = targetRef.value.clientHeight;

    // if (includePadding) {
    //   width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    //   height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    // }
    //
    // if (includeBorder) {
    //   width +=
    //     parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
    //   height +=
    //     parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    // }
    //
    // if (includeMargin) {
    //   width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    //   height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    // }

    const wrapHeight =
      targetRef.value.querySelector(".wrap-height")?.clientHeight || 0;

    return { width, height: height - wrapHeight };
  };

  // 更新尺寸
  const updateSize = () => {
    requestAnimationFrame(() => {
      const newSize = calculateSize();

      if (
        newSize.width !== size.value.width ||
        newSize.height !== size.value.height
      ) {
        size.value = newSize;
        onChange?.(newSize);
      }
    });
  };

  // 初始化监听
  onMounted(() => {
    if (!targetRef.value) return;

    // 立即获取初始尺寸
    if (immediate) {
      updateSize();
    }

    // 使用ResizeObserver监听尺寸变化
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(targetRef.value);
    } else {
      // 回退方案：使用窗口resize事件
      window.addEventListener("resize", updateSize);
    }
  });

  // 清理监听
  onUnmounted(() => {
    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    } else {
      window.removeEventListener("resize", updateSize);
    }
  });

  return size;
}
