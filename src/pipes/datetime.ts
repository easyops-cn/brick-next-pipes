import moment from "moment";

/**
 * Format a datetime.
 *
 * @public
 *
 * @param value - A valid moment input
 * @param format - A valid moment format
 *
 * @returns The formatted string
 */
export function datetime(value: number | string, format: string): string {
  return moment(value).format(format);
}
