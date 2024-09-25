import { atobUnicode } from "./atobUnicode";

describe("atobUnicode", () => {
  const testCases: [string, string][] = [
    ["5L2g5aW9LCDkuJbnlYw=", "你好, 世界"],
  ];
  test.each(testCases)("atobUnicode(%j) should return %j", (input, output) => {
    expect(atobUnicode(input)).toEqual(output);
  });
});