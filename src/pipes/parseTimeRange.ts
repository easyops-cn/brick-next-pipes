import moment, { DurationInputArg2 } from "moment";

/**
 * 解析一个时间字符串。
 *
 * @category Datetime
 *
 * @public
 *
 * @remarks
 *
 * `now/d` 将被转换为当天开始时的时间戳。
 *
 * `now/y` 将被转换为当年开始时的时间戳。
 *
 * `now-{n}d` 将被转换为 `n` 天前的时间戳。
 *
 * @param value - 时间字符串。
 *
 * @returns 解析后的时间戳，如果输入为空返回当前的时间戳。
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
