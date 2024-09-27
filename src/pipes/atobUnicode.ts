/**
 * 支持base64字符解码为中文
 *
 * @category Logic
 *
 * @public
 *
 * @param value - 需要进行解码的值
 *
 * @returns 解码后的值
 */
export function atobUnicode(value: string): string {
  return decodeURIComponent(
    atob(value)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
}
