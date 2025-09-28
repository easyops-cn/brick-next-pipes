import { crontabFormat } from "./crontabFormat";

jest.mock("i18next", () => ({
  __esModule: true,
  default: {
    addResourceBundle: jest.fn(),
    t: jest.fn((key) => key),
    language: "zh",
  },
}));

describe("crontabFormat", () => {
  const testCases: [string, string][] = [["0 6 * * *", "在上午 06:00"]];
  test.each(testCases)(
    "crontabFormat(%j) should return %j",
    (crontabStr, output) => {
      expect(crontabFormat(crontabStr)).toEqual(output);
    }
  );
});
