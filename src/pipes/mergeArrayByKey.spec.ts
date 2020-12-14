import { mergeArrayByKey } from "./mergeArrayByKey";

describe("mergeArrayByKey", () => {
  const testCases: [
    Parameters<typeof mergeArrayByKey>,
    ReturnType<typeof mergeArrayByKey>
  ][] = [
    [
      [
        [
          [
            { id: 1, a: "sai" },
            { id: 2, a: "King" },
          ],
          [
            { id: 1, b: 23 },
            { id: 3, b: 24 },
          ],
        ],
        "id",
      ],
      [
        { id: 1, a: "sai", b: 23 },
        { id: 2, a: "King" },
        { id: 3, b: 24 },
      ],
    ],
    [
      [
        [
          [
            { id: 1, a: "sai" },
            { id: 2, a: "King" },
          ],
          [
            { id: 1, b: 23 },
            { id: 3, b: 24 },
          ],
          [
            { id: 1, c: "haha" },
            { id: 4, c: "whatever" },
          ],
        ],
        "id",
      ],
      [
        { id: 1, a: "sai", b: 23, c: "haha" },
        { id: 2, a: "King" },
        { id: 3, b: 24 },
        { id: 4, c: "whatever" },
      ],
    ],
    [
      [
        [
          [{"id":1, 'data': [{ 'user': 'barney' }, { 'user': 'fred' }] }],
          [{"id":1, 'data': [{ 'age': 36 }, { 'age': 40 }]}],
        ],
        "id",
      ],
      [
        { id: 1, data: [{ 'user': 'barney' }, { 'user': 'fred' }, { 'age': 36 }, { 'age': 40 }] },
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
