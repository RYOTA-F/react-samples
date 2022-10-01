export const USE_REDUCER_CODE = [
  {
    fileName: '/src/pages/useReducer/index.tsx',
    code: `import { FC, useState, useReducer } from 'react'
import { reducer, initialState } from './reducer'
/* components */
import Button from '../../components/button'
import Input from '../../components/input'
/* styles */
import { InputContainer, Content } from './style'

const UseReducer: FC = () => {
  const [input, setInput] = useState('')
  const [state, dispach] = useReducer(reducer, initialState)

  return (
    <>
      Count: <Content>{state.count}</Content>
      <div>
        <Button childlen="+" colorType="sub" onClick={() => dispach({ type: 'add' })} margin={10} />
        <Button childlen="-" colorType="sub" onClick={() => dispach({ type: 'sub' })} margin={10} />
      </div>
      <hr />
      <br />
      <div>
        Text: <Content>{state.text}</Content>
      </div>
      <InputContainer>
        <Input value={input} setValue={setInput} />
        <Button childlen="Change Text" onClick={() => dispach({ type: 'change', text: input })}/>
      </InputContainer>
    </>
  )
}

export default UseReducer`,
  },

  {
    fileName: '/src/pages/useReducer/reducer.ts',
    code: `export type State = {
  text: string
  count: number
}

export const initialState: State = {
  text: '',
  count: 0,
}

export type Action =
  | { type: 'change'; text: string }
  | { type: 'add' }
  | { type: 'sub' }

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        text: action.text,
      }
    case 'add':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'sub':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}`,
  },
]
