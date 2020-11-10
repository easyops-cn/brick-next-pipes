/**
 * 返回一个数组倒转之后的新数组。
 *
 * @category Array
 *
 * @public
 *
 * @param value - 数组。
 *
 * @returns 倒转后的新数组，如果输入不是数组则返回空数组。
 */
export function reverse<T>(value: T[]): T[] {
  return Array.isArray(value) ? value.slice().reverse() : [];
}
