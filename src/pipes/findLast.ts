import { findLast as _findLast } from "lodash";

/**
 * This method is like _.find except that it iterates over elements of a collection from
 * right to left.
 *
 * @category Collection
 *
 * @remarks It is transparently exported from {@link https://lodash.com/docs/#findLast | _.findLast}.
 *
 * @public
 *
 * @param collection - Searches for a value in this list.
 * @param predicate - The function called per iteration.
 * @param fromIndex - The index to search from.
 * @returns The found element, else undefined.
 */
export function findLast(
  collection: unknown[] | Record<string, unknown>,
  predict:
    | string
    | number
    | Record<string, unknown>
    | [string | number, unknown],
  fromIndex?: number
): unknown {
  return _findLast(collection, predict, fromIndex);
}
