import { get } from "lodash";

/**
 * 通过填充调用数组中各项的指定属性来创建一个新数组。
 *
 * @category Array
 *
 * @public
 *
 * @example
 *
 * ```ts
 * map([{ count: 123 }], "count")
 * // Returns `[ 123 ]`
 *
 * map([{ item: { name: "xyz" } }, {}], "item.name")
 * // Returns ["xyz", undefined]
 * ```
 *
 * @param value - 数组。
 * @param key - 属性名（路径）。
 *
 * @returns 返回新数组，当输入不是数组时返回空数组。
 */
export function map(value: unknown[], key: string): unknown[] {
  return Array.isArray(value) ? value.map((item) => get(item, key)) : [];
}
