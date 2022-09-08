import { FC, useCallback } from 'react'
/* redux */
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, decrementCounter } from '../counter.action'
import type { RootState } from '../counter.store'

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
      <button
        style={{ width: '200px', height: '50px', margin: '20px' }}
        onClick={handleClickIncrement}
      >
        Increment
      </button>
      <span>count: {count}</span>
      <button
        style={{ width: '200px', height: '50px', margin: '20px' }}
        onClick={handleClickDecrement}
      >
        Decrement
      </button>
    </>
  )
}

export default ReduxChild
