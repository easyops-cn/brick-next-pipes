import { safeLoad, JSON_SCHEMA } from "js-yaml";

/**
 * 解析一个 YAML 格式的字符串（反序列化）。
 *
 * @category Serialization
 *
 * @public
 *
 * @param value - YAML 格式的字符串。
 *
 * @returns 返回解析后的值，如果解析失败返回 `undefined`。
 */
export function yaml(value: string): unknown {
  let result;
  try {
    result = safeLoad(value, { schema: JSON_SCHEMA, json: true });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
  return result;
}
