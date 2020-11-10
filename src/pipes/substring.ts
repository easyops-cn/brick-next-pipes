/**
 * 根据指定起始位置和结束位置（不包含）返回一个字符串的子串。
 *
 * @category String
 *
 * @public
 *
 * @remarks
 *
 * 详见 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring}
 *
 * @param value - 字符串。
 * @param from - 返回的子串的起始位置。
 * @param end - 返回的子串的结束位置。
 *
 * @returns 子串。
 */
export function substring(value: string, start: number, end?: number): string {
  return typeof value === "string" ? value.substring(start, end) : "";
}
