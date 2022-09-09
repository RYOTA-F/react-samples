import { FC } from 'react'

const SuggestStyle: FC = () => {
  const css = `
    .react-autosuggest__container {
      position: relative;
    }

    .react-autosuggest__input {
      width: 400px;
      min-width: 80px;
      min-height: 40px;
      border-radius: 4px;
      margin: 0;
      padding: 8px 10px;
      font-size: 1rem;
      font-weight: 700;
      outline: none;
      color: #0f2950;
      border-color: #c0c0c0;
      font-family: '游ゴシック Medium', 'Yu Gothic Medium', '游ゴシック体', YuGothic, 'ヒラギノ角ゴ Pro', 'Hiragino Kaku Gothic Pro', 'メイリオ', 'Meiryo', sans-serif;
      &::placeholder
        color: #b7beca;
      &:focus
        border: none;
    }

    .react-autosuggest__input--focused {
      border-color: transparent;
      box-shadow: inset 0 0 0 2px #04a9f4;
      border-radius: 4px;
    }

    .react-autosuggest__input--open {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .react-autosuggest__suggestions-container {
      display: none;
    }

    .react-autosuggest__suggestions-container--open {
      display: block;
      position: absolute;
      top: 51px;
      border: 1px solid #aaa;
      background-color: #fff;
      font-family: Helvetica, sans-serif;
      font-weight: 300;
      font-size: 16px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      z-index: 2;
    }

    .react-autosuggest__suggestions-list {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    .react-autosuggest__suggestion {
      cursor: pointer;
      padding: 10px 20px;
    }

    .react-autosuggest__suggestion--highlighted {
      background-color: #ddd;
    }
  `

  return <style>{css}</style>
}

export default SuggestStyle
