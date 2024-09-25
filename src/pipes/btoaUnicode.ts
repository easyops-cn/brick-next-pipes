/**
 * 支持将中文进行base64编码
 *
 * @category Type conversion
 *
 * @public
 *
 * @param value - 需要进行编码的值
 *
 * @returns 编码后的值
 */
import { TextEncoder } from "util";

export function btoaUnicode(value: string): string {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(value);
  let binary = "";
  bytes.forEach((byte: any) => (binary += String.fromCharCode(byte)));
  return window.btoa(binary);

  // return window.btoa(unescape(encodeURIComponent(value)));
}