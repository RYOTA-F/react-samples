import { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../counter.store'
import { decrement, increment } from '../counter.slice'

const ReduxToolkitChild: FC = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h2>ReduxToolkitChild</h2>
      <div>
        <button
          style={{ width: '200px', height: '50px', margin: '20px' }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          style={{ width: '200px', height: '50px', margin: '20px' }}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </>
  )
}

export default ReduxToolkitChild
