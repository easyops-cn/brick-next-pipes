/**
 * Determines whether an array includes an item or
 * a string includes a partial string.
 *
 * @category Array
 *
 * @public
 *
 * @param value - A string or an array
 * @param part - The partial string or the array item to search
 *
 * @returns Whether the target includes the part
 */
export function includes(
  value: string | unknown[],
  part: string | unknown
): boolean {
  return value.includes(part as any);
}
