import {
  FC,
  BaseSyntheticEvent,
  Dispatch,
  SetStateAction,
  useState,
} from 'react'
import AutoSuggest from 'react-autosuggest'
import SuggestStyle from './style'

export type AutoSuggestEmailForm = {
  inputValue: string
  setInputValue: Dispatch<SetStateAction<string>>
  suggestionDataSet: string[]
  placeholderText: string
}

const AutoSuggestEmailForm: FC<AutoSuggestEmailForm> = ({
  inputValue,
  setInputValue,
  suggestionDataSet,
  placeholderText,
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([])

  const domains = suggestionDataSet.map((v) => '@' + v)

  /**
   * サジェストデータを変換
   */
  const convertSuggestion = (inputValue: string, domain: string) => {
    const account = inputValue.match('@')
      ? inputValue.substring(0, inputValue.indexOf('@'))
      : inputValue

    return account + domain
  }

  /**
   * サジェストデータを読み込み
   */
  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    setSuggestions(
      domains.map((domain) => {
        return convertSuggestion(value, domain)
      })
    )
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
  const onChangeInput = (
    event: BaseSyntheticEvent,
    { newValue }: { newValue: string }
  ) => {
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
      <h2>AutoSuggestEmailForm</h2>
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

export default AutoSuggestEmailForm
