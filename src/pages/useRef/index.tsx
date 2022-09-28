import { FC, useState, useRef } from 'react'
/* components */
import Button from '../../components/button'
import PageTitle from '../../components/pageTitle'
/* libs */
import useGetElementProperty from '../../lib/hooks/useGetElementProperty'
/* styles */
import { Sample, ButtonUp, ButtonBottom, ButtonLeft, ButtonRight } from './style'

const MOVE_VALUE = 40

const initialPosition = {
  top: 400,
  left: 400,
}

const UseRef: FC = () => {
  const [position, setPosition] = useState(initialPosition)

  const ref = useRef<HTMLDivElement>(null)

  const { getElementProperty } = useGetElementProperty(ref)

  /**
   * 移動ボタンをクリック
   */
  const onClickMove = (moveType: 'up' | 'down' | 'right' | 'left') => {
    const value = position

    switch (moveType) {
      case 'up':
        value.top = getElementProperty('top') - MOVE_VALUE
        break
      case 'down':
        value.top = getElementProperty('top') + MOVE_VALUE
        break
      case 'right':
        value.left = getElementProperty('left') + MOVE_VALUE
        break
      case 'left':
        value.left = getElementProperty('left') - MOVE_VALUE
        break
      default:
        break
    }

    setPosition({ ...position, ...value })
  }

  return (
    <>
      <PageTitle title="useRef" />
      <Sample ref={ref} top={position.top} left={position.left} />

      <ButtonUp>
        <Button childlen="↑" width={50} height={50} onClick={() => onClickMove('up')} />
      </ButtonUp>
      <ButtonBottom>
        <Button childlen="↓" width={50} height={50} onClick={() => onClickMove('down')} />
      </ButtonBottom>

      <ButtonLeft>
        <Button childlen="←" width={50} height={50} onClick={() => onClickMove('left')} />
      </ButtonLeft>
      <ButtonRight>
        <Button childlen="→" width={50} height={50} onClick={() => onClickMove('right')} />
      </ButtonRight>
    </>
  )
}

export default UseRef
