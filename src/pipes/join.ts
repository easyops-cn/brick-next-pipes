/**
 * 将一个数组的所有元素拼接成字符串。
 *
 * @category Array
 *
 * @remarks 当输入值不是数组时返回空字符串。
 *
 * @public
 *
 * @param value - 数组。
 * @param separator - 分隔符号（默认为 `","`）。
 *
 * @returns 拼接后的字符串。
 */
export function join(value: unknown[], separator = ","): string {
  return Array.isArray(value) ? value.join(separator) : "";
}
