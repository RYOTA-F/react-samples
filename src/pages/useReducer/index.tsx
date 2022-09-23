import { FC, useState, useReducer } from 'react'
import { reducer, initialState } from './reducer'
/* components */
import PageTitle from '../../components/pageTitle'
import Button from '../../components/button'
import Input from '../../components/input'
/* styles */
import { InputContainer, Content } from './style'

const UseReducer: FC = () => {
  const [input, setInput] = useState('')
  const [state, dispach] = useReducer(reducer, initialState)

  return (
    <>
      <PageTitle title="UseReducer" />
      Count: <Content>{state.count}</Content>
      <div>
        <Button childlen="+" onClick={() => dispach({ type: 'add' })} margin={10} />
        <Button childlen="-" onClick={() => dispach({ type: 'sub' })} margin={10} />
      </div>
      <hr />
      <br />
      <div>
        Text: <Content>{state.text}</Content>
      </div>
      <InputContainer>
        <Input value={input} setValue={setInput} />
        <Button
          childlen="Change Text"
          onClick={() => dispach({ type: 'change', text: input })}
          width={200}
          height={30}
          marginLeft={20}
        />
      </InputContainer>
    </>
  )
}

export default UseReducer
