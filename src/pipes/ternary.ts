/**
 * 三元运算，根据条件返回两个值中的一个。
 *
 * @category Logic
 *
 * @public
 *
 * @param value - 条件。
 * @param resultIfTrue - 当条件为真时返回的值。
 * @param resultIfFalse - 当条件为假时返回的值。
 *
 * @returns 当 `value` 为真时返回 `resultIfTrue`，否则返回 `resultIfFalse`。
 */
export function ternary<T, U>(
  value: boolean,
  resultIfTrue: T,
  resultIfFalse: U
): T | U {
  return value ? resultIfTrue : resultIfFalse;
}
