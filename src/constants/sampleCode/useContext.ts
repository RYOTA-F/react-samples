export const USE_CONTEXT_CODE = [
  {
    fileName: '/src/pages/useContext/index.tsx',
    code: `import { FC, createContext } from 'react'
/* components */
import UseContextChild from './useContextChild'

const sample = 'Context Sample Text'
export const SampleContext = createContext(sample)

const UseContext: FC = () => {
  return (
    <>
      <h2>Parent Component</h2>
      <SampleContext.Provider value={sample}>
        <UseContextChild />
      </SampleContext.Provider>
    </>
  )
}

export default UseContext
`,
  },
  {
    fileName: '/src/pages/useContext/useContextChild/index.tsx',
    code: `import { FC, useContext } from 'react'
/* context */
import { SampleContext } from '../index'

const UseContextChild: FC = () => {
  const sample = useContext(SampleContext)

  return (
    <>
      <h2>Child Component</h2>
      <br />
      {'useContext(SampleContext) ->'}
      <div>{sample}</div>
    </>
  )
}

export default UseContextChild`,
  },
]
