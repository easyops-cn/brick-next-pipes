/**
 * The addition operator (`+`) produces the sum of numeric operands or string concatenation.
 *
 * @public
 *
 * @param x - x
 * @param y - y
 *
 * @returns Do string concatenation if one of arguments is string, or numeric sum if not.
 */
export function add(x: number | string, y: number | string): number | string {
  return (x as any) + y;
}
