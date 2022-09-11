import sum from './sum'

test('合計値が正しい', () => {
  expect(sum(2, 3)).toBe(5)
})
