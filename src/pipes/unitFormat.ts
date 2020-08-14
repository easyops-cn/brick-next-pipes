import { formatUnitValue } from "../utils";

export function unitFormat(
  value: number,
  unit: string,
  precision = 2
): [string, string] {
  return formatUnitValue(value, { unit, precision });
}
