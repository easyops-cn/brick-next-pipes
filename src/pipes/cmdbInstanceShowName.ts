/**
 * 获得一个 CMDB 实例的展示名。
 *
 * @category Others
 *
 * @public
 *
 * @example
 *
 * ```ts
 * cmdbInstancesShowName("Foo")
 * // Returns "Foo".
 *
 * cmdbInstancesShowName(["Foo", "Bar"])
 * // Returns "Foo(Bar)".
 *
 * cmdbInstancesShowName(["Foo", "Bar", "Baz"])
 * // Returns "Foo(Bar, Baz)".
 *
 * cmdbInstancesShowName(["Foo"])
 * // Returns "Foo".
 *
 * cmdbInstancesShowName([undefined, "Bar"])
 * // Returns "Bar".
 * ```
 *
 * @param value - 用于展示的（一个或多个）属性值。
 *
 * @returns 实例的展示名。
 */
export function cmdbInstanceShowName(value: string | string[]): string {
  if (Array.isArray(value)) {
    const firstKey = value[0] || ""; // 第一个show key为undefined时 且 第二个也为undefined 显示 "-"
    const resKey = value.slice(1, value.length).join(",");
    const res = resKey
      ? `${firstKey}${firstKey ? `(${resKey})` : `${resKey}`}`
      : firstKey || "-"; // 第一个show key为undefined时 且 第二个为有值 显示 "第二个值不需要括号"
    return res;
  } else {
    return value;
  }
}
