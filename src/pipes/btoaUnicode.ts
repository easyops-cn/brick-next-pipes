import { TextEncoder } from "util";
/**
 * 支持将中文进行base64编码
 *
 * @category Logic
 *
 * @public
 *
 * @param value - 需要进行编码的值
 *
 * @returns 编码后的值
 */
export function btoaUnicode(value: string): string {
  return btoa(
    encodeURIComponent(value).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode(Number("0x" + p1));
    })
  );
}
