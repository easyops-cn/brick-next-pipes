import { keyBy as _keyBy } from "lodash";

/**
 * Creates an object composed of keys generated from the results of running each element of collection through
 * iteratee. The corresponding value of each key is the last element responsible for generating the key. The
 * iteratee function is invoked with one argument: (value).
 *
 * @category Collection
 *
 * @remarks It is transparently exported from {@link https://lodash.com/docs/#keyBy | _.keyBy}.
 *
 * @public
 *
 * @param collection - The collection to iterate over.
 * @param iteratee - The function invoked per iteration.
 * @returns Returns the composed aggregate object.
 */
export function keyBy(
  collection: unknown[] | Record<string, unknown>,
  iteratee: string | number
): Record<string, unknown> {
  return _keyBy(collection, iteratee);
}
