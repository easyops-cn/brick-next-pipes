import { yamlStringify } from "./yamlStringify";

jest.spyOn(console, "error").mockImplementation(() => void 0);

describe("yamlStringify", () => {
  const circularValue: Record<string, unknown> = {};
  circularValue.self = circularValue;

  const testCases: [unknown, number, { sortKeys?: boolean }, string][] = [
    ["3", undefined, undefined, "'3'\n"],
    [{ name: "foo", age: 18 }, undefined, undefined, "name: foo\nage: 18\n"],
    [
      { name: "foo", age: 18 },
      undefined,
      { sortKeys: true },
      "age: 18\nname: foo\n",
    ],
    [/re/, undefined, undefined, ""],
    [circularValue, undefined, undefined, undefined],
  ];

  test.each(testCases)(
    "yamlStringify(%j, %j) should return %j",
    (value, indent, opts, output) => {
      expect(yamlStringify(value, indent, opts)).toEqual(output);
    }
  );
});
