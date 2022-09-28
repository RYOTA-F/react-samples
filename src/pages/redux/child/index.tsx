import { FC, useCallback } from 'react'
/* components */
import Button from '../../../components/button'
/* redux */
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, decrementCounter } from '../counter.action'
import type { RootState } from '../counter.store'
/* styles */
import { Counter, Count } from './style'

const ReduxChild: FC = () => {
  const dispatch = useDispatch()
  const { count } = useSelector((state: RootState) => state.counter)

  const handleClickIncrement = useCallback(() => {
    dispatch(incrementCounter(1))
  }, [dispatch])

  const handleClickDecrement = useCallback(() => {
    dispatch(decrementCounter(1))
  }, [dispatch])

  return (
    <>
      <h2>ReduxChild</h2>
      <Button
        childlen="Increment"
        colorType="sub"
        width={200}
        height={50}
        margin={20}
        onClick={handleClickIncrement}
      />
      <Counter>
        Counter: <Count>{count}</Count>
      </Counter>
      <Button
        childlen="Decrement"
        colorType="sub"
        width={200}
        height={50}
        margin={20}
        onClick={handleClickDecrement}
      />
    </>
  )
}

export default ReduxChild
