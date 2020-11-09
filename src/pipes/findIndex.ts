import { findIndex as _findIndex } from "lodash";

/**
 * This method is like _.find except that it returns the index of the first element predicate returns truthy
 * for instead of the element itself.
 *
 * @category Array
 *
 * @remarks It is transparently exported from {@link https://lodash.com/docs/#findIndex | _.findIndex}.
 *
 * @public
 *
 * @param array - The array to search.
 * @param predicate - The function invoked per iteration.
 * @param fromIndex - The index to search from.
 * @returns Returns the index of the found element, else -1.
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
