import { btoaUnicode } from "./btoaUnicode";

describe("btoaUnicode", () => {
  const testCases: [string, string][] = [
    ["你好, 世界", "5L2g5aW9LCDkuJbnlYw="],
    ["中文编码", "5Lit5paH57yW56CB"],
  ];
  test.each(testCases)("btoaUnicode(%j) should return %j", (input, output) => {
    expect(btoaUnicode(input)).toEqual(output);
  });
});
