/**
 * 将一个字符串分割为字符串列表。
 *
 * @category String
 *
 * @public
 *
 * @remarks
 *
 * 详见 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split}。
 *
 * @param value - 字符串。
 * @param separator - 分隔符。
 *
 * @returns 返回字符串子串数组，如果输入不是字符串则返回空数组。
 */
export function split(value: string, separator: string): string[] {
  return typeof value === "string" ? value.split(separator) : [];
}
