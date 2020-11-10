/**
 * 空值合并（`??`）。
 *
 * @category Logic
 *
 * @public
 *
 * @param value - 输入值。
 * @param defaultValue - 默认值。
 *
 * @returns 当输入值是 `null` 或 `undefined` 时返回默认值，否则返回原输入值。
 */
export function nullish<T, U>(value: T, defaultValue: U): T | U {
  return value ?? defaultValue;
}
