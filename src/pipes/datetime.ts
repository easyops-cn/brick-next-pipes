import moment from "moment";

/**
 * Format a datetime (using locale timezone).
 *
 * @public
 *
 * @example
 *
 * ```ts
 * datetime(1582877669000).format("YYYY-MM-DD")
 * // Returns "2020-02-28"
 *
 * datetime("2020-02-28T17:14").format("YYYY-MM-DD")
 * // Returns "2020-02-28"
 * ```
 *
 * @param value - A valid moment input
 * @param format - A valid moment format
 *
 * @returns The formatted string
 */
export function datetime(value: number | string, format: string): string {
  return moment(value).format(format);
}
