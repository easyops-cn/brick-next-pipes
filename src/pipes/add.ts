/**
 * 数学加法或字符串拼接。
 *
 * @category Mathematics
 *
 * @remarks
 *
 * 详见 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition}。
 *
 * @example
 *
 * 数学加法：
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
 * 字符串拼接：
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
 * @param value - 值。
 * @param operand - 操作数。
 *
 * @returns 如果其中一个参数为字符串，返回字符串，否则返回数字。
 */
export function add(
  value: number | string,
  operand: number | string
): number | string {
  return (value as any) + operand;
}
