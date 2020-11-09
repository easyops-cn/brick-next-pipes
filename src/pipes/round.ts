import { round as _round } from "lodash";

/**
 * Calculates n rounded to precision.
 *
 * @category Mathematics
 *
 * @remarks It is transparently exported from {@link https://lodash.com/docs/#round | _.round}.
 *
 * @public
 *
 * @param n - The number to round.
 * @param precision - The precision to round to.
 * @returns Returns the rounded number.
 */
export function round(n: number, precision?: number): number {
  return _round(n, precision);
}
