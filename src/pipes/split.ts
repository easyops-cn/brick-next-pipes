/**
 * Divides a string into an ordered list of substrings.
 *
 * @public
 *
 * @remarks
 *
 * See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split}
 * Returns `[]` if the input is not a string.
 *
 * @param value - The input string
 * @param separator - The separator
 *
 * @returns The array of substrings
 */
export function split(value: string, separator: string): string[] {
  return typeof value === "string" ? value.split(separator) : [];
}
