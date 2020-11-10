import { isNil, groupBy, keys, set, indexOf, get } from "lodash";

/**
 * 返回一个数组的拷贝，并为每个元素新增一个分组索引字段。
 *
 * @category Others
 *
 * @public
 *
 * @remarks
 *
 * 新增的分组索引按分组属性升序排列。
 *
 * @example
 *
 * ```ts
 * const data = [
 *   { a: "3", b: "1" },
 *   { a: "1", b: "2" },
 *   { a: "1", b: "3" },
 * ]
 * groupByIndex(data, "a", "groupIndex")
 * // Returns `[
 * //   { a: "3", b: "1", groupIndex: 1 },
 * //   { a: "1", b: "2", groupIndex: 0 },
 * //   { a: "1", b: "3", groupIndex: 0 },
 * // ]`
 * ```
 *
 * @param value - 对象数组。
 * @param groupField - 要分组的属性名。
 * @param targetField - 要新增的分组索引属性名。
 *
 * @returns 增加了分组索引属性的新数组。
 */
export function groupByToIndex(
  value: Record<string, unknown>[],
  groupField: string,
  targetField: string
): Record<string, unknown>[] {
  let result = value;
  if (!isNil(groupField) && !isNil(targetField)) {
    const groupByValue = groupBy(value, groupField);
    const allKeys = keys(groupByValue).sort();
    result = result.map((v) => {
      const item = { ...v };
      set(item, targetField, indexOf(allKeys, get(v, groupField)));
      return item;
    });
  }
  return result;
}
