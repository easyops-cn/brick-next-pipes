import moment from "moment";

/**
 * A time period.
 *
 * @public
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
 * deltaTime("2019-05-10 17:21:00")
 * // Returns "30 minutes ago"
 *
 * deltaTime("2019-05-10 18:51:00")
 * // Returns "in an hour"
 *
 * deltaTime({ startTime: "2019-05-10", endTime: "2019-06-10" }, false)
 * // Returns "a month"
 *
 * deltaTime({ startTime: "2019-05-10 17:48:00" }, false)
 * // Returns "3 minutes"
 * ```
 *
 * @param time - A specific time or a time period
 * @param withSuffix - Whether to include a suffix to the result (defaults to `true`)
 * @param format - The format of input time (defaults to `"YYYY-MM-DD HH:mm:ss"` for non-numeric input)
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
