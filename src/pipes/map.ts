import { get } from "lodash";

/**
 * Creates a new array by populated with the specific property
 * of each items of the calling array.
 *
 * @public
 *
 * @remarks
 *
 * The parameter `key` could be a dot-separated string of property path.
 *
 * Returns an empty string if the input is not array.
 *
 * @example
 *
 * ```ts
 * map([{ count: 123 }], "count")
 * // Returns `[ 123 ]`
 *
 * map([{ item: { name: "xyz" } }, {}], "item.name")
 * // Returns ["xyz", undefined]
 * ```
 *
 * @param value - The array to be mapped
 * @param key - The property name (path) to be mapped
 *
 * @returns The new mapped array
 */
export function map(value: unknown, key: string): unknown[] {
  return Array.isArray(value) ? value.map((item) => get(item, key)) : [];
}
