/**
 * Creates an array of key-value pairs from the entries of an object.
 *
 * @category Others
 *
 * @public
 *
 * @example
 *
 * ```ts
 * const data = { name: "Li Lei", age: 16, gender: "male" }
 * mapToArray(data, "label", "value")
 * // Returns `[
 * //   {label: "name", "value": "Li Lei"},
 * //   {label: "age", "value": 16},
 * //   {label: "gender", "value": "male"},
 * // ]`
 * ```
 *
 * @param value - The input object
 * @param keyField - The field name of keys
 * @param valueField - The field name of values
 *
 * @returns The new array of key-value pairs
 */
export function mapToArray(
  value: Record<string, unknown>,
  keyField: string,
  valueField: string
): unknown[] {
  if (typeof value !== "object" || !value) return [];
  return Object.entries(value).map(([k, v]) => ({
    [keyField]: k,
    [valueField]: v,
  }));
}
