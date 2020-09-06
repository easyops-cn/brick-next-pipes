/**
 * The addition operator (`+`) produces the sum of numeric operands or string concatenation.
 *
 * @remarks
 *
 * See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition}
 *
 * @example
 *
 * Numeric addition:
 *
 * ```ts
 * // Number + Number -> addition
 * 1 + 2 // 3
 *
 * // Boolean + Number -> addition
 * true + 1 // 2
 *
 * // Boolean + Boolean -> addition
 * false + false // 0
 * ```
 *
 * String concatenation:
 *
 * ```ts
 * // String + String -> concatenation
 * 'foo' + 'bar' // "foobar"
 *
 * // Number + String -> concatenation
 * 5 + 'foo' // "5foo"
 *
 * // String + Boolean -> concatenation
 * 'foo' + false // "foofalse"
 * ```
 *
 * @public
 *
 * @param value - Value
 * @param operand - Operand
 *
 * @returns Concatenation of strings if one of arguments is string, or numeric sum if not.
 */
export function add(
  value: number | string,
  operand: number | string
): number | string {
  return (value as any) + operand;
}
