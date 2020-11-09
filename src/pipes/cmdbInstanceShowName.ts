/**
 * Get the display name of a CMDB instance from its properties.
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
 * ```
 *
 * @param value - A property (single string or an array of string)
 *
 * @returns The display name
 */
export function cmdbInstanceShowName(value: unknown): unknown {
  if (Array.isArray(value)) {
    const firstKey = value[0];
    const resKey = value.slice(1, value.length).join(",");
    const res = resKey ? `${firstKey}(${resKey})` : firstKey ?? "";
    return res;
  } else {
    return value;
  }
}
