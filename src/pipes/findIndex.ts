import { findIndex as _findIndex } from "lodash";

/**
 * 从一个数组中找到第一个匹配的元素的位置。
 *
 * @category Array
 *
 * @remarks 透传调用 {@link https://lodash.com/docs/#findIndex | _.findIndex}。
 *
 * @public
 *
 * @param array - 要搜索的数组。
 * @param predicate - 需要匹配的条件。
 * @param fromIndex - 从哪个位置开始搜索。
 *
 * @returns 返回找到的元素的位置，没有找到时返回 `-1`。
 */
export function findIndex(
  array: unknown[],
  predict:
    | string
    | number
    | Record<string, unknown>
    | [string | number, unknown],
  fromIndex?: number
): number {
  return _findIndex(array, predict, fromIndex);
}
