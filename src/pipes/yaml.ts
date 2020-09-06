import { safeLoad, JSON_SCHEMA } from "js-yaml";

/**
 * Parse a YAML formatted string.
 *
 * @public
 *
 * @remarks
 *
 * Returns `undefined` if parse failed.
 *
 * @param value - A YAML formatted string
 *
 * @returns The parsed value
 */
export function yaml(value: string): unknown {
  let result;
  try {
    result = safeLoad(value, { schema: JSON_SCHEMA, json: true });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
  return result;
}
