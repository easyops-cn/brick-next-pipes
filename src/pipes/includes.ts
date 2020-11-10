/**
 * 判断一个数组是否包含指定元素，或一个字符串是否包含指定子串。
 *
 * @category Array
 *
 * @public
 *
 * @param value - 一个数组或字符串。
 * @param part - 要搜索的数组元素或字符串子串。
 *
 * @returns 如果包含返回 `true`，否则返回 `false`。
 */
export function includes(
  value: string | unknown[],
  part: string | unknown
): boolean {
  return value.includes(part as any);
}
