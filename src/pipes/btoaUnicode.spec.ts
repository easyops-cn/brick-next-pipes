import { btoaUnicode } from "./btoaUnicode";

describe("btoaUnicode", () => {
  const testCases: [string, string][] = [
    ["你好, 世界", "5L2g5aW9LCDkuJbnlYw="],
  ];
  test.each(testCases)("btoaUnicode(%j) should return %j", (input, output) => {
    expect(btoaUnicode(input)).toEqual(output);
  });
});
