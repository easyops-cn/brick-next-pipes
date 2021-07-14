import moment from "moment";

/**
 * 日期时间格式化（使用当地时区）。
 *
 * @category Datetime
 *
 * @public
 *
 * @example
 *
 * ```ts
 * datetime(1582877669000, "YYYY-MM-DD")
 * // Returns "2020-02-28"
 *
 * datetime("2020-02-28T17:14", "YYYY-MM-DD")
 * // Returns "2020-02-28"
 * ```
 *
 * @param value - 日期时间字符串或 Unix 时间戳（{@link https://momentjs.com/docs/#/parsing/string/}）。
 * @param format - 输出格式。
 *
 * @returns 格式化后的日期时间。
 */
export function datetime(value: number | string, format: string): string {
  return moment(value).format(format);
}
