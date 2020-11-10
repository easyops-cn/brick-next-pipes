import { cmdbInstanceShowName } from "./cmdbInstanceShowName";

describe("cmdbInstanceShowName", () => {
  const testCases: [string | string[], string][] = [
    [["a"], "a"],
    [["a", "b"], "a(b)"],
    [["a", "b", "c"], "a(b,c)"],
    [[], ""],
    ["asd", "asd"],
    [123 as any, 123 as any],
    [undefined, undefined],
  ];
  test.each(testCases)(
    "cmdbInstanceShowName(%j) should return %j",
    (input, output) => {
      expect(cmdbInstanceShowName(input)).toEqual(output);
    }
  );
});
