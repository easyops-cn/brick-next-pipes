import moment, { DurationInputArg2 } from "moment";

/**
 * Parse a time range.
 *
 * @public
 *
 * @remarks
 *
 * `now/d` is parsed to the timestamp of the beginning of the current day.
 *
 * `now/y` is parsed to the timestamp of the beginning of the current year.
 *
 * `now-{n}d` where `{n}` is a digit number, is parsed to the timestamp of the day `n` days ago.
 *
 * @param value - The input string
 *
 * @returns The timestamp
 */
export function parseTimeRange(value: string): number {
  if (value === "now/d") {
    return +moment().startOf("day");
  }

  if (value === "now/y") {
    return +moment().startOf("year");
  }

  const reg = /^now-(\d+)(\w+)/;

  const matches = reg.exec(value);

  if (matches !== null) {
    const [, num, unit] = matches;
    return +moment().subtract(num, unit as DurationInputArg2);
  }
  return value ? +value : +moment();
}
