/**
 * 支持base64字符解码为中文
 *
 * @category Type conversion
 *
 * @public
 *
 * @param value - 需要进行解码的值
 *
 * @returns 解码后的值
 */
import { TextDecoder } from "util";

export function atobUnicode(value: string): string {
  const binary = window.atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  const decoder = new TextDecoder();
  return decoder.decode(bytes);
}
