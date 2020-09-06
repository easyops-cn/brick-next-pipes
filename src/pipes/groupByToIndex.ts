import { isNil, groupBy, keys, set, indexOf, get } from "lodash";

/**
 * Returns a copy of an array, inserting a index property
 * to each elements of the input array.
 *
 * @public
 *
 * @remarks
 *
 * The inserted index is ascending sorted by the grouped property.
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
 * @param value - The input array
 * @param groupField - The property name to be grouped
 * @param targetField - The index property to be inserted
 *
 * @returns The group-indexed copy of array
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
