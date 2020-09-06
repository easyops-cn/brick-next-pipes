import { formatUnitValue } from "../utils";

/**
 * Format a unit value.
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
 * @param value - The input number.
 * @param unit - The unit
 * @param precision - The precision (defaults to `2`)
 *
 * @returns An array with the formatted value and the unit.
 */
export function unitFormat(
  value: number,
  unit: string,
  precision = 2
): [string, string] {
  return formatUnitValue(value, { unit, precision });
}
