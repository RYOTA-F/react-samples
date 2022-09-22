import { FC, useState } from 'react'
/* components */
import PageTitle from '../../components/pageTitle'

const UseState: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <PageTitle title="useState" />
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}

export default UseState
