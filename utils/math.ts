type operationEnum = 'multiply' | 'divide' | 'minus' | 'plus'
export const math = (a: number, b: number, operation: operationEnum) => {
  let result = 0
  if (operation === 'multiply') result = a * b
  if (operation === 'divide') result = a / b
  if (operation === 'minus') result = a - b
  if (operation === 'plus') result = a + b
  return result
};