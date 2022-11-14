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
 * @param unit - 当前单位。
 * @param precision - 精度（默认为 `2`）。
 * @param targetUnit - 目标单位，若不填则会自动计算。
 *
 * @returns 由转换后的数值和单位组成的数组。
 */
export function unitFormat(
  value: number,
  unit: string,
  precision = 2,
  targetUnit?: string
): [string, string] {
  return formatUnitValue(value, { unit, precision, targetUnit });
}
