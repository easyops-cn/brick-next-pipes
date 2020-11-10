import { sortBy } from "lodash";

/**
 * 返回一个数组按指定属性排序后的新数组。
 *
 * @category Array
 *
 * @public
 *
 * @param value - 数组。
 * @param fields - 属性（路径）。
 *
 * @returns 排序后的新数组。
 */
export function sort<T>(value: T[], fields?: string | string[]): T[] {
  return Array.isArray(value) ? sortBy(value, fields) : [];
}
