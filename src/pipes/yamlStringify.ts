import { safeDump, JSON_SCHEMA } from "js-yaml";

/**
 * 将一个值转换为 YAML 格式的字符串（序列化）。
 *
 * @category Serialization
 *
 * @public
 *
 * @param value - 输入值。
 * @param indent - 空格缩进数量（默认为 `2`）。
 * @param opts - 选项
 *
 * @returns 序列化后的字符串；如果序列化失败（例如包含循环引用）返回 `undefined`。
 */
export function yamlStringify(
  value: unknown,
  indent = 2,
  opts?: { sortKeys?: boolean }
): string {
  let result;
  try {
    result = safeDump(value, {
      indent,
      schema: JSON_SCHEMA,
      skipInvalid: true,
      noRefs: true,
      noCompatMode: true,
      sortKeys: opts?.sortKeys,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
  return result;
}
