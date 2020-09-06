/**
 * Returns the part of the string between the start and end indexes,
 * or to the end of the string.
 *
 * @public
 *
 * @remarks
 *
 * See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring}
 * Returns `[]` if the input is not a string.
 *
 * @param value - The input string
 * @param start - The index of the first character to include in the returned substring
 * @param end - The index of the first character to exclude from the returned substring
 *
 * @returns A new string containing the specified part of the given string
 */
export function substring(value: string, start: number, end?: number): string {
  return typeof value === "string" ? value.substring(start, end) : "";
}
