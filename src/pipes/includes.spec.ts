import { includes } from "./includes";

describe("includes", () => {
  const testCases: [
    ...Parameters<typeof includes>,
    ReturnType<typeof includes>
  ][] = [
    [[1, 2, 3], 0, false],
    [["foo", "bar"], "foo", true],
    ["foobar", "foo", true],
  ];
  test.each(testCases)(
    "includes(%j, %j) should return %j",
    (value, part, output) => {
      expect(includes(value, part)).toEqual(output);
    }
  );
});
