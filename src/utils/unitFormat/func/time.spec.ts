import { humanizeTimeValue } from "./time";
import { TimesUnitId as TimeFormatUnitId } from "../constants";

describe("time", () => {
  it("should humanize time value correctly", () => {
    expect(humanizeTimeValue(10)).toEqual([10, "ms"]);

    expect(humanizeTimeValue(10, TimeFormatUnitId.Nanosecond)).toEqual([
      10,
      "ns",
    ]);

    expect(humanizeTimeValue(1000, "μs" as TimeFormatUnitId)).toEqual([
      1,
      "ms",
    ]);

    expect(humanizeTimeValue(1000, "ms" as TimeFormatUnitId)).toEqual([1, "s"]);

    expect(humanizeTimeValue(60, "s" as TimeFormatUnitId)).toEqual([1, "min"]);

    expect(humanizeTimeValue(60, "min" as TimeFormatUnitId)).toEqual([
      1,
      "hour",
    ]);

    expect(humanizeTimeValue(24, "hour" as TimeFormatUnitId)).toEqual([
      1,
      "day",
    ]);

    expect(humanizeTimeValue(7, "day" as TimeFormatUnitId)).toEqual([
      1,
      "week",
    ]);

    expect(humanizeTimeValue(30, "day" as TimeFormatUnitId)).toEqual([
      1,
      "month",
    ]);

    expect(humanizeTimeValue(12, "month" as TimeFormatUnitId)).toEqual([
      12,
      "month",
    ]);

    expect(humanizeTimeValue(365, "days(day)" as TimeFormatUnitId)).toEqual([
      1,
      "year",
    ]);
  });

  it("should humanize time value correctly with targetUnit", () => {
    expect(humanizeTimeValue(1000, undefined, undefined)).toEqual([1, "s"]);

    expect(
      humanizeTimeValue(1, undefined, TimeFormatUnitId.Nanosecond)
    ).toEqual([1000 * 1000, "ns"]);

    expect(humanizeTimeValue(10, undefined, "s" as TimeFormatUnitId)).toEqual([
      10 / 1000,
      "s",
    ]);

    expect(
      humanizeTimeValue(
        7,
        "day" as TimeFormatUnitId,
        "hour" as TimeFormatUnitId
      )
    ).toEqual([7 * 24, "hour"]);

    expect(
      humanizeTimeValue(
        1,
        "year" as TimeFormatUnitId,
        "days(day)" as TimeFormatUnitId
      )
    ).toEqual([365, "day"]);
  });
});
