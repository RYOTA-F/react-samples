import { FC, useState } from 'react'
import usePrevious from './usePrevious'
/* components */
import PageTitle from '../../components/pageTitle'

const UseRef: FC = () => {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious<number>(count)

  return (
    <div>
      <PageTitle title="useRef" />
      <div>
        Now: {count}, before: {prevCount}
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default UseRef
