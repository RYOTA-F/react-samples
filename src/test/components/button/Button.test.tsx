import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from './Button'

describe('Button', () => {
  test('should call onClick', async () => {
    const onClickMock = jest.fn()

    // 1. Buttonをレンダリング
    render(<Button onClick={onClickMock}>label</Button>)
    // screen.debug() // 実際にレンダリングされたDOMを出力
    // 2. Buttonを取得しクリック
    await userEvent.click(screen.getByRole('button'))
    // 3. props で渡した関数が呼ばれているかを確認する
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
