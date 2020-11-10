import { keyBy as _keyBy } from "lodash";

/**
 * 将指定属性（或迭代器执行结果）作为键名收集一个集合中的元素。
 *
 * @category Collection
 *
 * @remarks 透传调用 {@link https://lodash.com/docs/#keyBy | _.keyBy}。
 *
 * @public
 *
 * @example
 *
 * ```ts
 * const array = [
 *   { 'dir': 'left', 'code': 97 },
 *   { 'dir': 'right', 'code': 100 }
 * ];
 *
 * keyBy(array, function(o) {
 *   return String.fromCharCode(o.code);
 * });
 * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
 *
 * keyBy(array, 'dir');
 * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
 * ```
 *
 * @param collection - 数据集合。
 * @param iteratee - 属性名（或迭代器）。
 *
 * @returns 收集结果。
 */
export function keyBy(
  collection: unknown[] | Record<string, unknown>,
  iteratee: string | number
): Record<string, unknown> {
  return _keyBy(collection, iteratee);
}
