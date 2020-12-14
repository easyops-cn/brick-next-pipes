import { keyBy, merge } from "lodash";

/**
 * 将两个对象数组根据键合并为一个数组。
 *
 * @category Array
 *
 * @public
 *
 * @example
 *
 * ```ts
 * const dataList = [[{id:1,a:"sai"},{id:2,a: "King"}], [{id:1,b:23},{id:3,b:24}]]
 * mergeArrayByKey(dataList, "id")
 * // Returns  `[
 * //     {id:1,a:"sai",b:23},
 * //     {id:2,a:"King"},
 * //     {id:3,b:24}
 * //  ]`
 * ```
 *
 *
 * @returns 根据 key 合并后的数组。
 * @param dataList
 * @param key
 */
export function mergeArrayByKey(dataList: unknown[][], key: string): unknown[] {
  return dataList.reduce((acc, cur) => {
    return Object.values(merge(keyBy(acc, key), keyBy(cur, key)));
  }, []);
}
