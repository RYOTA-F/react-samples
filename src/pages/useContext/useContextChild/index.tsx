import { FC, useContext } from 'react'
/* context */
import { SampleContext } from '../index'
/* styles */
import { Container, ContextText } from './style'

const UseContextChild: FC = () => {
  const sample = useContext(SampleContext)

  return (
    <Container>
      <h2>Child Component</h2>
      <br />
      {'useContext(SampleContext) ->'}
      <ContextText>{sample}</ContextText>
    </Container>
  )
}

export default UseContextChild
