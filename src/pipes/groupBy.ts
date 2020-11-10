import { groupBy as _groupBy } from "lodash";

/**
 * 把一个集合按指定属性（或迭代器执行结果）的值进行分组。
 *
 * @category Collection
 *
 * @remarks 透传调用 {@link https://lodash.com/docs/#groupBy | _.groupBy}。
 *
 * @public
 *
 * @example
 *
 * ```ts
 * groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 * ```
 *
 * @param collection - 数据结合。
 * @param iteratee - 属性名（或迭代器）。
 *
 * @returns 分组结果。
 */
export function groupBy(
  collection: unknown[] | Record<string, unknown>,
  iteratee: string | number
): Record<string, unknown[]> {
  return _groupBy(collection, iteratee);
}
