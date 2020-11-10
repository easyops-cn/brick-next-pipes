import { round as _round } from "lodash";

/**
 * 获取一个数值的近似值。
 *
 * @category Mathematics
 *
 * @remarks 透传调用 {@link https://lodash.com/docs/#round | _.round}。
 *
 * @public
 *
 * @param n - 数值。
 * @param precision - 精度。
 *
 * @returns 近似值。
 */
export function round(n: number, precision?: number): number {
  return _round(n, precision);
}
