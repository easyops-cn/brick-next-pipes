import { get as _get } from "lodash";

/**
 * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
 * in its place.
 *
 * @remarks It is transparently exported from {@link https://lodash.com/docs/#get | _.get}.
 *
 * @category Object
 *
 * @public
 *
 * @param object - The object to query.
 * @param path - The path of the property to get.
 * @param defaultValue - The value returned if the resolved value is undefined.
 * @returns Returns the resolved value.
 */
export function get(
  object: Record<string, unknown>,
  path: string | string[],
  defaultValue: unknown
): unknown {
  return _get(object, path, defaultValue);
}
