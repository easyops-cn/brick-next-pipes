import moment from "moment";

/**
 * A time period.
 */
export interface Period {
  startTime?: number | string;
  endTime?: number | string;
}

function isPeriod(time: unknown): time is Period {
  return typeof time === "object" && time !== null;
}

function getMoment(input: number | string, format: string): moment.Moment {
  return typeof input === "number" ? moment(input) : moment(input, format);
}

/**
 * Get a humanized time period.
 *
 * @public
 *
 * @example
 *
 * ```ts
 * // Assuming now is "2019-05-10 17:51:00".
 *
 * deltaTime({ "2019-05-10 17:21:00" })
 * // Returns "30 minutes ago"
 * ```
 *
 * @param time - A specific time or a time period
 * @param withSuffix - Whether to include a suffix to the result
 * @param format - The format of input time
 *
 * @returns The humanized time period
 */
export function deltaTime(
  time: number | string | Period,
  withSuffix = true,
  format = "YYYY-MM-DD HH:mm:ss"
): string {
  if (!time) return "";
  if (isPeriod(time) && time.startTime && time.endTime) {
    const startTime = getMoment(time.startTime, format);
    const endTime = getMoment(time.endTime, format);
    return moment.duration(endTime.diff(startTime)).humanize(withSuffix);
  }

  const other = isPeriod(time) ? time.startTime || time.endTime : time;
  const then = getMoment(other, format);
  return moment.duration(then.diff(moment())).humanize(withSuffix);
}
