import { isEqual } from "lodash";

/**
 * 比较两个值是否相同（深度比较）。
 *
 * @category Logic
 *
 * @remarks
 *
 * 透传调用 {@link https://lodash.com/docs/#isEqual | _.isEqual}。
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are **not** supported.
 *
 * @public
 *
 * @param value - 被比较的值。
 * @param other - 比较值。
 *
 * @returns 如果两者相同返回 `true`，否则返回 `false`。
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
