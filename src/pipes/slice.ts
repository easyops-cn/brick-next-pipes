/**
 * 根据起始位置和结束位置（不包含）返回一个数组的一部分。
 *
 * @category Array
 *
 * @public
 *
 * @remarks
 *
 * 详见 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice}。
 *
 * @param value - 输入数组。
 * @param start - 要开始提取的索引位置。
 * @param end - 结束提取的索引位置。
 *
 * @returns 新数组。
 */
export function slice<T>(value: T[], start: number, end?: number): T[] {
  return value.slice(start, end);
}
