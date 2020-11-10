import moment from "moment";

/**
 * 一个时间段。
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
 * 将一个时间段转换为人类可读的文本。
 *
 * @category Datetime
 *
 * @remarks
 *
 * 给定一个时间段（`startTime` 和 `endTime`），将它转换为人类可读的文本。
 *
 * 当输入时间为单个值时，则计算它与当前时间的间隔时间段。
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
 * @param time - 指定时间（字符串或 UNIX 时间戳）或时间段。
 * @param withSuffix - 是否添加后缀（默认为 `true`）。
 * @param format - 输入的时间格式（使用时间戳时可忽略，默认为 `"YYYY-MM-DD HH:mm:ss"`）。
 *
 * @returns 人类可读的时间段显示。
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
