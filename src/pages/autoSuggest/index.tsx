import { FC, useState } from 'react'
import AutoSuggestEmailForm from '../../components/autoSuggestEmailForm'
import { EMAIL_DOMAIN_LIST } from './constants'

const AutoSuggest: FC = () => {
  const [input, setInput] = useState('')

  return (
    <>
      <h1>AutoSuggest</h1>
      <AutoSuggestEmailForm
        inputValue={input}
        setInputValue={setInput}
        suggestionDataSet={EMAIL_DOMAIN_LIST}
        placeholderText="メールアドレスを入力してください"
      />
    </>
  )
}

export default AutoSuggest
