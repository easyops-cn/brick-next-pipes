import { keyBy, merge } from "lodash";

/**
 * 将两个对象数组根据键合并为一个数组。
 *
 * @category Others
 *
 * @public
 *
 * @example
 *
 * ```ts
 * const arr1 = [{id:1,a:"sai"},{id:2,a: "King"}];
 * const arr2 = [{id:1,b:23},{id:3,b:24}];
 * mergeArrayByKey(data, "label", "value")
 * // Returns  `[
 * //     {id:1,a:"sai",b:23},
 * //     {id:2,a:"King"},
 * //     {id:3,b:24}
 * //  ]`
 * ```
 *
 *
 * @returns 根据 key 合并后的数组。
 * @param key
 * @param arr1
 * @param arr2
 */
export function mergeArrayByKey(
  key: string,
  arr1: unknown[],
  arr2: unknown[]
): unknown[] {
  return Object.values(merge(keyBy(arr1, key), keyBy(arr2, key)));
}
