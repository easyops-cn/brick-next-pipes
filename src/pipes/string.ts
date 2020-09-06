/**
 * Convert the input value to a string.
 *
 * @public
 *
 * @remarks Returns `""` if the input is `null` or `undefined`.
 *
 * @param value - The input value
 *
 * @returns The converted string
 */
export function string(value: unknown): string {
  // Consider `undefined` and `null` as `""`.
  return value === undefined || value === null ? "" : String(value);
}
