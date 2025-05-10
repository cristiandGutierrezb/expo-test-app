import { math } from "../math";

test('math is working', () => {
  expect(math(1, 3, 'multiply')).toBe(3)
  expect(math(3, 3, 'divide')).toBe(1)
  expect(math(3, 3, 'minus')).toBe(0)
  expect(math(1, 3, 'plus')).toBe(4)
})
