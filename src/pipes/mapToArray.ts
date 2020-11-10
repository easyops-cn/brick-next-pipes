/**
 * 将一个对象根据键值对映射转换为数组。
 *
 * @category Others
 *
 * @remarks
 *
 * 该函数首先将输入的对象 `data` 拆分成键值对数组，再将每个键值对
 * `[key, value]` 转换为 `{ [keyField]: key, [valueField]: value }`，
 * 最后返回这个新数组。
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
 * @param data - 对象。
 * @param keyField - 键名字段。
 * @param valueField - 键值字段。
 *
 * @returns 键值对映射后的数组。
 */
export function mapToArray(
  data: Record<string, unknown>,
  keyField: string,
  valueField: string
): unknown[] {
  if (typeof data !== "object" || !data) return [];
  return Object.entries(data).map(([k, v]) => ({
    [keyField]: k,
    [valueField]: v,
  }));
}
