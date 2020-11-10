import { isNil } from "lodash";

/**
 * 解析一个 JSON 格式的字符串（反序列化）。
 *
 * @category Serialization
 *
 * @public
 *
 * @param value - JSON 格式的字符串。
 *
 * @returns 返回解析后的值；如果解析失败返回 `undefined`；如果输入为 `null` 或 `undefined` 返回原输入。
 */
export function json(value: string): unknown {
  if (isNil(value)) return value;
  try {
    return JSON.parse(value);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return;
  }
}
