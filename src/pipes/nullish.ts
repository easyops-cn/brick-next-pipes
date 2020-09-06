/**
 * The nullish coalescing operator (`??`) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
 *
 * @public
 *
 * @param value - The input value
 * @param defaultValue - The default value
 *
 * @returns `defaultValue` if `value` is `null` or `undefined`, otherwise `value`
 */
export function nullish<T, U>(value: T, defaultValue: U): T | U {
  return value ?? defaultValue;
}
