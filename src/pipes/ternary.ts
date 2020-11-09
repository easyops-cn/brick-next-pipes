/**
 * Returns certain value by checking the input value is truthy or falsy.
 *
 * @category Logic
 *
 * @public
 *
 * @param value - The condition
 * @param resultIfTrue - A value which is returned if the input is truthy
 * @param resultIfFalse - A value which is returned if the input is falsy
 *
 * @returns `resultIfTrue` if `value` is truthy, otherwise `resultIfFalse`
 */
export function ternary<T, U>(
  value: boolean,
  resultIfTrue: T,
  resultIfFalse: U
): T | U {
  return value ? resultIfTrue : resultIfFalse;
}
