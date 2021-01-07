import { randomString } from "./randomString";

describe("randomString", () => {
  // [input length, input characters], output length
  const testCases: [[number, string], number][] = [
    [[], 8],
    [[6], 6],
    [[64], 64],
    [[64, "ABCDEFGabcdefg"], 64],
    [[64, "ABCDEFGabcdefg1234567890!@#$%^&*()_+<>?:\"{},./;'[]-="], 64],
    [[-1], 8],
    [[8, ""], 0],
    [[8, undefined], 8],
  ];
  test.each(testCases)(
    "randomString(%j) should ok",
    ([inputLength, inputCharacters], outputLength) => {
      // repeat 100 times to make sure random result
      for (let repeat = 0; repeat < 100; repeat++) {
        const result = randomString(inputLength, inputCharacters);
        inputCharacters =
          typeof inputCharacters === "string"
            ? inputCharacters
            : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        // test output length
        expect(result.length).toEqual(outputLength);
        // test if all character is included in input characters
        for (let i = 0; i < result.length; i++) {
          expect(inputCharacters.includes(result[i])).toBeTruthy();
        }
      }
    }
  );
});
