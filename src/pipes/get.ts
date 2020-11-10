import { get as _get } from "lodash";

/**
 * 获取一个对象指定属性（路径）的值。
 *
 * @remarks 透传调用 {@link https://lodash.com/docs/#get | _.get}。
 *
 * @category Object
 *
 * @public
 *
 * @param object - 对象。
 * @param path - 属性（路径）。
 * @param defaultValue - 当获取的值为 `undefined` 时返回的默认值。
 *
 * @returns 结果。
 */
export function get(
  object: Record<string, unknown>,
  path: string | string[],
  defaultValue: unknown
): unknown {
  return _get(object, path, defaultValue);
}
