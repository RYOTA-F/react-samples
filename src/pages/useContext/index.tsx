import { FC, createContext } from 'react'
/* components */
import UseContextChild from './useContextChild'
import PageTitle from '../../components/pageTitle'

const sample = 'Sample Context'
export const SampleContext = createContext(sample)

const UseContext: FC = () => {
  return (
    <>
      <PageTitle title="UseContext" />
      <SampleContext.Provider value={sample}>
        <UseContextChild />
      </SampleContext.Provider>
    </>
  )
}

export default UseContext
