import type { Column } from "element-plus";
import type { ElementSize } from "./useELementSize";
import { TableV2FixedDir } from "element-plus";

export const useTableColumnResizer = (
  columns: Ref<Column[]>,
  size: Ref<ElementSize>,
  isRtl: ComputedRef<boolean>
) => {
  const maxWidth = computed(() => {
    return columns.value.reduce((sum, column) => {
      const width = column.maxWidth || 0;
      sum += width;
      return sum;
    }, 0);
  });

  const maxMinWidth = computed(() => {
    return columns.value.reduce((sum, column) => {
      const width = column.minWidth || 0;
      sum += width;
      return sum;
    }, 0);
  });

  const isOverflow = computed(() => {
    return size.value.width < maxMinWidth.value!;
  });

  // 计算列宽度
  const calcColumnWidth = (column: Column) => {
    if (isOverflow.value) {
      // column.width = column.width!;
    } else {
      column.width =
        (column.maxWidth || 0) * (size.value.width / maxWidth.value!);
    }
  };

  const length = computed(() => columns.value.length);

  // watchEffect(() => {
  //   const column = columns.value.find((e) => e.key === "operations") || {};
  //   if (isOverflow.value) {
  //     (column as any).fixed = !isRtl.value
  //       ? TableV2FixedDir.RIGHT
  //       : TableV2FixedDir.LEFT;
  //   } else {
  //     delete (column as any).fixed;
  //   }
  // });

  watchEffect(() => {
    columns.value.forEach((column) => {
      calcColumnWidth(column);
    });
  });
};
