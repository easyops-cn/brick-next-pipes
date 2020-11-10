/**
 * 将一个值转换为 JSON 格式的字符串（序列化）。
 *
 * @category Serialization
 *
 * @public
 *
 * @param value - 输入值。
 * @param indent - 空格缩进数量（默认为 `2`）。
 *
 * @returns 序列化后的字符串；如果序列化失败（例如包含循环引用）返回 `undefined`。
 */
export function jsonStringify(value: unknown, indent = 2): string {
  try {
    return JSON.stringify(value, null, indent);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return;
  }
}
