/**
 * 将输入值转换为字符串。
 *
 * @category Type conversion
 *
 * @public
 *
 * @param value - 输入值。
 *
 * @returns 返回转换后的字符串，如果输入值为 `null` 或 `undefined` 则返回空字符串。
 */
export function string(value: unknown): string {
  // Consider `undefined` and `null` as `""`.
  return value === undefined || value === null ? "" : String(value);
}
