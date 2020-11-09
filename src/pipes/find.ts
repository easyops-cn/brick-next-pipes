import { find as _find } from "lodash";

/**
 * Iterates over elements of collection, returning the first element predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, index|key, collection).
 *
 * @category Collection
 *
 * @remarks It is transparently exported from {@link https://lodash.com/docs/#find | _.find}.
 *
 * @public
 *
 * @param collection - The collection to search.
 * @param predicate - The function invoked per iteration.
 * @param fromIndex - The index to search from.
 * @returns Returns the matched element, else undefined.
 */
export function find(
  collection: unknown[] | Record<string, unknown>,
  predict:
    | string
    | number
    | Record<string, unknown>
    | [string | number, unknown],
  fromIndex?: number
): unknown {
  return _find(collection, predict, fromIndex);
}
