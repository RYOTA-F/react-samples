import { FC, useState } from 'react'
/* components */
import AutoSuggestEmailForm from '../../components/autoSuggestEmailForm'
import PageTitle from '../../components/pageTitle'
/* constants */
import { EMAIL_DOMAIN_LIST } from '../../constants/domain'

const AutoSuggest: FC = () => {
  const [input, setInput] = useState('')

  return (
    <>
      <PageTitle title="AutoSuggest" />
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
