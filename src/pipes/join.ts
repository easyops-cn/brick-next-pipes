/**
 * Returns a new string by concatenating all of the elements in an array
 *
 * @remarks Returns an empty string if the input is not array.
 *
 * @public
 *
 * @param value - The items to join
 * @param separator - The separator (defaults to `","`)
 *
 * @returns The string joined
 */
export function join(value: unknown[], separator = ","): string {
  return Array.isArray(value) ? value.join(separator) : "";
}
