import { crontabFormat } from "./crontabFormat";
// Mock @next-libs/crontab
// jest.mock("@next-libs/crontab", () => {
//   const originalModule = jest.requireActual('@next-libs/crontab');

//   return {
//     __esModule: true,
//     ...originalModule,
//     getRandom: jest.fn(() => 10),
//   };
// });
describe("crontabFormat", () => {
  const testCases: [string, string][] = [["0 6 * * *", "在上午 06:00"]];
  test.each(testCases)(
    "crontabFormat(%j) should return %j",
    (crontabStr, output) => {
      expect(crontabFormat(crontabStr)).toEqual(output);
    }
  );
});
