import { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
/* components */
import Button from '../../../components/button'
/* store */
import type { RootState } from '../counter.store'
import { decrement, increment } from '../counter.slice'
/* styles */
import { Container, Counter, Count } from './style'

const ReduxToolkitChild: FC = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Container>
      <h2>Child Component</h2>
      <div>
        <Button
          childlen="Increment"
          colorType="sub"
          width={200}
          height={50}
          margin={20}
          onClick={() => dispatch(increment())}
        />
        <Counter>
          Count:
          <Count>{count}</Count>
        </Counter>
        <Button
          childlen="Decrement"
          colorType="sub"
          width={200}
          height={50}
          margin={20}
          onClick={() => dispatch(decrement())}
        />
      </div>
    </Container>
  )
}

export default ReduxToolkitChild
