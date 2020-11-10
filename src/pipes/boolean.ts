/**
 * 将一个值转换为布尔值（也可使用别名 `bool`）。
 *
 * @category Type conversion
 *
 * @public
 *
 * @remarks 该转换会把字符串的 `"0"` 也看作 `false`。
 *
 * @param value - 需要转换的值。
 *
 * @returns 转换后的布尔值。
 */
export function boolean(value: unknown): boolean {
  // Consider `"0"` as false.
  return value !== "0" && Boolean(value);
}

/** @internal */
export const bool = boolean;
