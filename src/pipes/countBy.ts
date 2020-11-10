import { countBy as _countBy } from "lodash";

/**
 * 统计一个集合中每个元素的指定属性（或迭代器执行结果）的值出现的次数。
 *
 * @category Collection
 *
 * @remarks 透传调用 {@link https://lodash.com/docs/#countBy | _.countBy}。
 *
 * @example
 *
 * ```ts
 * countBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': 1, '6': 2 }
 *
 * countBy(['one', 'two', 'three'], 'length');
 * // => { '3': 2, '5': 1 }
 * ```
 *
 * @public
 *
 * @param collection - 数据集合。
 * @param iteratee - 属性名（或迭代器）。
 *
 * @returns 统计结果。
 */
export function countBy(
  collection: unknown[] | Record<string, unknown>,
  iteratee: string | number
): Record<string, number> {
  return _countBy(collection, iteratee);
}
