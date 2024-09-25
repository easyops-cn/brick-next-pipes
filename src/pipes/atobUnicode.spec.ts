import { atobUnicode } from "./atobUnicode";

describe("atobUnicode", () => {
  const testCases: [string, string][] = [
    ["5L2g5aW9LCDkuJbnlYw=", "你好, 世界"],
    ["5Lit5paH57yW56CB", "中文编码"],
  ];
  test.each(testCases)("atobUnicode(%j) should return %j", (input, output) => {
    expect(atobUnicode(input)).toEqual(output);
  });
});
