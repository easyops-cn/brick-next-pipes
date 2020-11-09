/**
 * Stringify a value into JSON.
 *
 * @category Serialization
 *
 * @public
 *
 * @remarks
 *
 * Returns `undefined` if stringify failed (e.g. includes circular refs).
 *
 * @param value - A value to be stringified
 * @param indent - The space indention (defaults to `2`)
 *
 * @returns The stringified value
 */
export function jsonStringify(value: unknown, indent = 2): string {
  try {
    return JSON.stringify(value, null, indent);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return;
  }
}
