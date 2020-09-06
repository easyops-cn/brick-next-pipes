import { isNil } from "lodash";

/**
 * Parse a JSON formatted string.
 *
 * @public
 *
 * @remarks
 *
 * Returns the input itself if the input is `null` or `undefined`.
 *
 * Returns `undefined` if parse failed.
 *
 * @param value - A JSON formatted string
 *
 * @returns The parsed value
 */
export function json(value: string): unknown {
  if (isNil(value)) return value;
  try {
    return JSON.parse(value);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return;
  }
}
