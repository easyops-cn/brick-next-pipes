/**
 * Returns a shallow copy of a portion of an array.
 *
 * @public
 *
 * @remarks
 *
 * The new array is selected from `start` to `end` (`end` not included)
 * where `start` and `end` represent the index of items in that array.
 * The original array will not be modified. See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice}
 *
 * @param value - The input array
 * @param start - Zero-based index at which to start extraction
 * @param end - Zero-based index before which to end extraction
 *
 * @returns A new array containing the extracted elements
 */
export function slice<T>(value: T[], start: number, end?: number): T[] {
  return value.slice(start, end);
}
