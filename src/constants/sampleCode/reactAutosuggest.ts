export const REACT_AUTOSUGGEST_CODE = [
  {
    fileName: '/src/components/autoSuggestEmailForm/index.tsx',
    code: `import { FC, BaseSyntheticEvent, Dispatch, SetStateAction, useState } from 'react'
import AutoSuggest from 'react-autosuggest'
import SuggestStyle from './style'

export type AutoSuggestEmailFormProps = {
  inputValue: string
  setInputValue: Dispatch<SetStateAction<string>>
  suggestionDataSet: string[]
  placeholderText: string
}

const AutoSuggestEmailForm: FC<AutoSuggestEmailFormProps> = ({
  inputValue,
  setInputValue,
  suggestionDataSet,
  placeholderText,
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([])

  const domains = suggestionDataSet.map((v) => '@' + v)

  /**
   * サジェストデータを読み込み
   */
  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    const account = value.match('@') ? value.substring(0, value.indexOf('@')) : value
    setSuggestions(domains.map((domain) => account + domain))
  }

  /**
   * サジェストデータをクリア
   */
  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  /**
   * サジェストデータの取得
   */
  const getSuggestionValue = (suggestions: string) => {
    return suggestions
  }

  /**
   * サジェストのレンダリング
   */
  const renderSuggestion = (suggestion: string) => {
    return <div>{suggestion}</div>
  }

  /**
   * フォーム入力
   */
  const onChangeInput = (event: BaseSyntheticEvent, { newValue }: { newValue: string }) => {
    if (event) setInputValue(newValue)
  }

  /**
   * インプット情報
   */
  const inputProps = {
    value: inputValue,
    onChange: onChangeInput,
    placeholder: placeholderText,
  }

  return (
    <>
      <SuggestStyle />
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </>
  )
}

export default AutoSuggestEmailForm`,
  },
]
