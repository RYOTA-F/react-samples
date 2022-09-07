import { FC, createContext } from 'react'
import UseContextChild from './useContextChild'

const sample = 'Sample Context'
export const SampleContext = createContext(sample)

const UseContext: FC = () => {
  return (
    <>
      <h1>UseContext</h1>
      <SampleContext.Provider value={sample}>
        <UseContextChild />
      </SampleContext.Provider>
    </>
  )
}

export default UseContext
