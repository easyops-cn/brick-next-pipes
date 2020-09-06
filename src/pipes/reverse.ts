/**
 * Creates a reversed copy of an array.
 *
 * @public
 *
 * @remarks
 *
 * The original array will not be modified.
 * Returns `[]` if the input is not an array.
 *
 * @param value - The input array
 *
 * @returns The reversed array
 */
export function reverse<T>(value: T[]): T[] {
  return Array.isArray(value) ? value.slice().reverse() : [];
}
