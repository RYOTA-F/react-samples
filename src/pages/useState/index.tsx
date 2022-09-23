import { FC, useState } from 'react'
/* components */
import Button from '../../components/button'
import PageTitle from '../../components/pageTitle'
/* styles */
import { Count } from './style'

const UseState: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <PageTitle title="useState" />
      <div>Counter</div>
      <Count>{count}</Count>
      <Button childlen="+" onClick={() => setCount(count + 1)} margin={20} />
      <Button childlen="-" onClick={() => setCount(count - 1)} margin={20} />
    </>
  )
}

export default UseState
