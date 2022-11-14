import { humanizeDataRateValue } from "./dataRate";
import { ByteRatesUnitId as DataRateFormatUnitId } from "../constants";

describe("dateRate", () => {
  it("should humanize data rate value correctly", () => {
    expect(humanizeDataRateValue(8)).toEqual([1, "Bps"]);
    expect(humanizeDataRateValue(8 * 1024)).toEqual([1, "KBps"]);
    expect(humanizeDataRateValue(1024, DataRateFormatUnitId.KBps)).toEqual([
      1,
      "MBps",
    ]);

    expect(humanizeDataRateValue(-8)).toEqual([-1, "Bps"]);
    expect(humanizeDataRateValue(-8 * 1024)).toEqual([-1, "KBps"]);
    expect(humanizeDataRateValue(-1024, DataRateFormatUnitId.KBps)).toEqual([
      -1,
      "MBps",
    ]);
  });

  it("should humanize data rate value correctly with targetUnit", () => {
    expect(
      humanizeDataRateValue(
        8,
        "kilobits/sec" as DataRateFormatUnitId,
        "bits/sec(bps)" as DataRateFormatUnitId
      )
    ).toEqual([8 * 1024, "bps"]);

    expect(
      humanizeDataRateValue(
        8,
        "kilobits/sec" as DataRateFormatUnitId,
        "mbps" as DataRateFormatUnitId
      )
    ).toEqual([8 / 1024, "Mbps"]);

    expect(
      humanizeDataRateValue(
        8,
        "kilobytes/sec" as DataRateFormatUnitId,
        "bytes/sec" as DataRateFormatUnitId
      )
    ).toEqual([8 * 1024, "Bps"]);

    expect(
      humanizeDataRateValue(
        8,
        "kilobytes/sec" as DataRateFormatUnitId,
        "megabytes/sec" as DataRateFormatUnitId
      )
    ).toEqual([8 / 1024, "MBps"]);
  });
});
