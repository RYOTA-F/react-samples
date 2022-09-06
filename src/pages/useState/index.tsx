import { useState } from 'react'
import type { FC } from 'react'

const UseState: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>UseState</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}

export default UseState
