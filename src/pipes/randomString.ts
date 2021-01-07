/**
 * 获得一个随机字符串
 *
 * @category Others
 *
 * @public
 *
 * @example
 *
 * ```ts
 * randomString()
 * // Returns "jUf92Zd0".
 *
 * randomString(6)
 * // Returns "sUf0Zd".
 *
 * randomString(6, "0123456789@")
 * // Returns "971@12".
 *
 * ```
 *
 * @param length - 随机字符串的长度，默认为8。
 *
 * @param characters - 随机字符串包含哪些字符，默认为大小写字母及数字。例如指定"0123456789"则随机字符只会包含数字；指定"0123456789abcdef"则随机字符是个16进制数。
 *
 * @returns 随机字符串
 */
export function randomString(length?: number, characters?: string): string {
  length = length > 0 ? length : 8;
  characters =
    typeof characters === "string"
      ? characters
      : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
