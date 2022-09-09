import { FC, useState } from 'react'
import AutoSuggestEmailForm from '../../components/auto_suggest_email_form'
import { EMAIL_DOMAIN_LIST } from './constants'

const AutoSuggest: FC = () => {
  const [input, setInput] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])

  return (
    <>
      <h1>AutoSuggest</h1>
      <hr />
      <AutoSuggestEmailForm
        inputValue={input}
        setInputValue={setInput}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
        suggestionDataSet={EMAIL_DOMAIN_LIST}
        placeholderText="メールアドレスを入力してください"
      />
    </>
  )
}

export default AutoSuggest
