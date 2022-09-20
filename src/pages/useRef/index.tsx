import { FC, useState } from 'react'
import usePrevious from './usePrevious'

const UseRef: FC = () => {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious<number>(count)

  return (
    <div>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default UseRef
