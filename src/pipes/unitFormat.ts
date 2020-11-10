import { formatUnitValue } from "../utils";

/**
 * 将一个数值转换为带单位的数据。
 *
 * @category Others
 *
 * @public
 *
 * @example
 *
 * ```ts
 * unitFormat(1024, "KBps")
 * // Returns `["1.00", "MBps"]`
 * ```
 *
 * @param value - 数值。
 * @param unit - 单位。
 * @param precision - 精度（默认为 `2`）。
 *
 * @returns 由转换后的数值和单位组成的数组。
 */
export function unitFormat(
  value: number,
  unit: string,
  precision = 2
): [string, string] {
  return formatUnitValue(value, { unit, precision });
}
