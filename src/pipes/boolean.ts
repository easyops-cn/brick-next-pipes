/**
 * Convert a value to boolean (Alias as `bool`).
 *
 * @category Type conversion
 *
 * @public
 *
 * @remarks Consider `"0"` as false.
 *
 * @param value - Value to be converted
 *
 * @returns Converted value
 */
export function boolean(value: unknown): boolean {
  // Consider `"0"` as false.
  return value !== "0" && Boolean(value);
}

/** @internal */
export const bool = boolean;
