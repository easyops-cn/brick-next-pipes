/**
 * Returns a portion of the string, starting at the specified index
 * and extending for a given number of characters afterwards.
 *
 * @category String
 *
 * @public
 *
 * @remarks
 *
 * See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr}
 * Returns `[]` if the input is not a string.
 *
 * @param value - The input string
 * @param from - The index of the first character to include in the returned substring
 * @param length - The number of characters to extract
 *
 * @returns A new string containing the specified part of the given string
 */
export function substr(value: string, from: number, length?: number): string {
  return typeof value === "string" ? value.substr(from, length) : "";
}
