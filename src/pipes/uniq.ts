import { uniq as _uniq } from "lodash";

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept.
 *
 * @category Array
 *
 * @remarks It is transparently exported from {@link https://lodash.com/docs/#uniq | _.uniq}.
 *
 * @public
 *
 * @param array - The array to inspect.
 * @returns Returns the new duplicate free array.
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
