import { uniq as _uniq } from "lodash";

/**
 * 获取一个数组去重后的新数组。
 *
 * @category Array
 *
 * @remarks 透传调用 {@link https://lodash.com/docs/#uniq | _.uniq}。
 *
 * @public
 *
 * @param array - 数组。
 *
 * @returns 去重后的数组。
 *
 * @example
 *
 * ```ts
 * uniq([2, 1, 2]);
 * // => [2, 1]
 * ```
 */
export function uniq<T>(array: T[]): T[] {
  return _uniq(array);
}
