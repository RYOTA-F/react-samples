import { render } from '@testing-library/react'
import Header from './Header'

test('Propsがない場合はデフォルト文字列が表示される', () => {
  const { container } = render(<Header />)
  expect(container.innerHTML).toMatch('React App')
})

test('Propsがある場合は渡された文字列が表示される', () => {
  const title = 'Props Text'
  const { container } = render(<Header title={title} />)
  expect(container.innerHTML).toMatch(title)
})
