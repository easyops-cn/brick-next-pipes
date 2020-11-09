import { isEqual } from "lodash";

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * @category Logic
 *
 * @remarks
 *
 * It is transparently exported from {@link https://lodash.com/docs/#isEqual | _.isEqual}.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are **not** supported.
 *
 * @public
 *
 * @param value - The value to compare.
 * @param other - The other value to compare.
 * @returns Returns `true` if the values are equivalent, else `false`.
 *
 * @example
 *
 * ```ts
 * let object = { 'user': 'fred' };
 * let other = { 'user': 'fred' };
 *
 * equal(object, other);
 * // => true
 *
 * object === other;
 * // => false
 * ```
 */
export function equal(value: unknown, other: unknown): boolean {
  return isEqual(value, other);
}
