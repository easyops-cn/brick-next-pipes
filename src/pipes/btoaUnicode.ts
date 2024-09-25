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
  const encoder = new TextEncoder();
  const bytes = encoder.encode(value);
  let binary = "";
  bytes.forEach((byte: any) => (binary += String.fromCharCode(byte)));
  return window.btoa(binary);
}
