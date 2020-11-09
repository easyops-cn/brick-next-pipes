import { findLastIndex as _findLastIndex } from "lodash";

/**
 * This method is like _.findIndex except that it iterates over elements of collection from right to left.
 *
 * @category Array
 *
 * @remarks It is transparently exported from {@link https://lodash.com/docs/#findLastIndex | _.findLastIndex}.
 *
 * @public
 *
 * @param array - The array to search.
 * @param predicate - The function invoked per iteration.
 * @param fromIndex - The index to search from.
 * @returns Returns the index of the found element, else -1.
 */
export function findLastIndex(
  array: unknown[],
  predict:
    | string
    | number
    | Record<string, unknown>
    | [string | number, unknown],
  fromIndex?: number
): number {
  return _findLastIndex(array, predict, fromIndex);
}
