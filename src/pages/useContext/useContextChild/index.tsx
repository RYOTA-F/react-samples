import { FC, useContext } from 'react'
import { SampleContext } from '../index'

const UseContextChild: FC = () => {
  const sample = useContext(SampleContext)

  return (
    <>
      <h2>UseContextChild</h2>
      {sample}
    </>
  )
}

export default UseContextChild
