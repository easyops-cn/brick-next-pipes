import {keyBy, mergeWith, isArray} from "lodash";

/**
 * 将多个对象数组根据键合并为一个数组, 对于数组类型的属性不会 deep merge, 只会 concat。
 *
 * @category Array
 *
 * @public
 *
 * @example
 *
 * ```ts
 * const dataList = [
 *     [{id:1,a:"sai"},{id:2,a: "King"}],
 *     [{id:1,b:23},{id:3,b:24}],
 * ]
 * mergeArrayByKey(dataList, "id")
 * // Returns  `[
 * //     {id:1,a:"sai",b:23},
 * //     {id:2,a:"King"},
 * //     {id:3,b:24},
 * //  ]`
 *
 * const dataList2 = [
 *     [{"id":1, 'data': [{ 'user': 'barney' }, { 'user': 'fred' }] }],
 *     [{"id":1, 'data': [{ 'age': 36 }, { 'age': 40 }]}]
 * ]
 * mergeArrayByKey(dataList, "id")
 * // Returns  `[
 * //      {id: 1, data: [{ 'user': 'barney' }, { 'user': 'fred' }, { 'age': 36 }, { 'age': 40 }] },
 * // ]`
 * ```
 *
 * @param dataList - 所有需要合并的对象数组
 * @param key - 属性名（或迭代器）。
 * @returns 根据 key 合并后的数组。
 */
export function mergeArrayByKey(dataList: unknown[][], key: string): unknown[] {
  return dataList.reduce((acc, cur) => {
    return Object.values(mergeWith(keyBy(acc, key), keyBy(cur, key), customizer));
  }, []);
}

// A specialized version of merge which simply concatenates arrays instead of deep merging them.
function customizer(objValue: unknown, srcValue: unknown) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}
