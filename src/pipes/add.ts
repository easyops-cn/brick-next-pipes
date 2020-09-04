/**
 * The addition operator (`+`) produces the sum of numeric operands or string concatenation.
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
