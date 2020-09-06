import { safeDump, JSON_SCHEMA } from "js-yaml";

/**
 * Stringify a value into YAML.
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
export function yamlStringify(value: unknown, indent = 2): string {
  let result;
  try {
    result = safeDump(value, {
      indent,
      schema: JSON_SCHEMA,
      skipInvalid: true,
      noRefs: true,
      noCompatMode: true,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
  return result;
}
