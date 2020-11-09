/**
 * The logical NOT (!) operator (logical complement, negation) takes truth to falsity and vice versa.
 *
 * @category Logic
 *
 * @public
 *
 * @param value - The input value
 *
 * @returns `false` if the input can be converted to `true`, otherwise `true`
 */
export function not(value: unknown): boolean {
  return !value;
}
