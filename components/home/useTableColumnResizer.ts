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
      const width = column.minWidth || 0;
      sum += width;
      return sum;
    }, 0);
  });

  const isOverflow = computed(() => {
    return size.value.width < maxWidth.value!;
  });

  // 计算列宽度
  const calcColumnWidth = (column: Column) => {
    if (isOverflow.value) {
      column.width = column.minWidth!;
    } else {
      column.width =
        (column.minWidth || 0) * (size.value.width / maxWidth.value!);
    }
  };

  const length = computed(() => columns.value.length);

  watchEffect(() => {
    if (isOverflow.value) {
      const column = columns.value.find((e) => e.key === "operations") || {};
      (column as any).fixed = !isRtl.value
        ? TableV2FixedDir.RIGHT
        : TableV2FixedDir.LEFT;
    } else {
      delete columns.value[length.value - 1].fixed;
    }
  });

  watchEffect(() => {
    columns.value.forEach((column) => {
      calcColumnWidth(column);
    });
  });
};
