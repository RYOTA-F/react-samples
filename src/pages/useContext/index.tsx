import { FC, createContext } from 'react'
/* components */
import UseContextChild from './useContextChild'
import PageTitle from '../../components/pageTitle'
/* styles */
import { Container } from './style'

const sample = 'Context Sample Text'
export const SampleContext = createContext(sample)

const UseContext: FC = () => {
  return (
    <>
      <PageTitle title="UseContext" />
      <Container>
        <h2>Palent Page</h2>
        <SampleContext.Provider value={sample}>
          <UseContextChild />
        </SampleContext.Provider>
      </Container>
    </>
  )
}

export default UseContext
