import { FC, useState, useReducer } from 'react'
import { reducer, initialState } from './reducer'
/* components */
import PageTitle from '../../components/pageTitle'

const UseReducer: FC = () => {
  const [input, setInput] = useState('')
  const [state, dispach] = useReducer(reducer, initialState)

  return (
    <>
      <PageTitle title="UseReducer" />
      <hr />
      <div>{state.text}</div>
      <div>{state.count}</div>
      <hr />
      <button onClick={() => dispach({ type: 'add' })}>+</button>
      <button onClick={() => dispach({ type: 'sub' })}>-</button>

      <hr />
      <input value={input} onChange={(v) => setInput(v.target.value)} />
      <button onClick={() => dispach({ type: 'change', text: input })}>change</button>
    </>
  )
}

export default UseReducer
