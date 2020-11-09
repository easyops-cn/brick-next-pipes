import { countBy as _countBy } from "lodash";

/**
 * Creates an object composed of keys generated from the results of running each element of collection through
 * iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The
 * iteratee is invoked with one argument: (value).
 *
 * @category Collection
 *
 * @remarks It is transparently exported from {@link https://lodash.com/docs/#countBy | _.countBy}.
 *
 * @public
 *
 * @param collection - The collection to iterate over.
 * @param iteratee - The function invoked per iteration.
 * @returns Returns the composed aggregate object.
 */
export function countBy(
  collection: unknown[] | Record<string, unknown>,
  iteratee: string | number
): Record<string, number> {
  return _countBy(collection, iteratee);
}
