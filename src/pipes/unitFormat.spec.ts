import { unitFormat } from "./unitFormat";

describe("unitFormat", () => {
  const testCases: [
    Parameters<typeof unitFormat>,
    ReturnType<typeof unitFormat>
  ][] = [
    [
      [1000.0, "KBps"],
      ["1.00", "MBps"],
    ],
    [
      [1000.0, "KBps", 3],
      ["1.000", "MBps"],
    ],
    [
      [1, "megabits/sec", 0, "bits/sec"],
      ["1000000", "bps"],
    ],
    [
      [1230000, "kilobits/sec", 2, undefined, false],
      ["1.23", "Gbps"],
    ],
  ];
  test.each(testCases)(
    "unitFormat(...%j) should return %j",
    (input, output) => {
      expect(unitFormat(...input)).toEqual(output);
    }
  );
});
