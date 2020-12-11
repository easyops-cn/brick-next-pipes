import { mergeArrayByKey } from "./mergeArrayByKey";

describe("mergeArrayByKey", () => {
  const testCases: [
    Parameters<typeof mergeArrayByKey>,
    ReturnType<typeof mergeArrayByKey>
  ][] = [
    [
      [
        "id",
        [
          { id: 1, a: "sai" },
          { id: 2, a: "King" },
        ],
        [
          { id: 1, b: 23 },
          { id: 3, b: 24 },
        ],
      ],
      [
        { id: 1, a: "sai", b: 23 },
        { id: 2, a: "King" },
        { id: 3, b: 24 },
      ],
    ],
  ];
  test.each(testCases)(
    "mergeArrayByKey(...%j) should return %j",
    (input, output) => {
      expect(mergeArrayByKey(...input)).toEqual(output);
    }
  );
});
