import { sortBy } from "lodash";

/**
 * Returns a copy of an array, sorted in ascending order
 * by the specific property of each elements of the array.
 *
 * @public
 *
 * @param value - The input array
 * @param fields - The property path to sort by
 *
 * @returns The sorted array
 */
export function sort<T>(value: T[], fields?: string | string[]): T[] {
  return Array.isArray(value) ? sortBy(value, fields) : [];
}
