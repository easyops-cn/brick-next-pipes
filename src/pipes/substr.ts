/**
 * 根据指定起始位置和长度返回一个字符串的子串。
 *
 * @category String
 *
 * @public
 *
 * @remarks
 *
 * 详见 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr}。
 *
 * @param value - 字符串。
 * @param from - 返回的子串的起始位置。
 * @param length - 返回的子串的长度。
 *
 * @returns 子串。
 */
export function substr(value: string, from: number, length?: number): string {
  return typeof value === "string" ? value.substr(from, length) : "";
}
