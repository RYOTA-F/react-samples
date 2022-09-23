import style, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

/**
 * Reset CSS
 */
export const GlobalStyle = createGlobalStyle`
  ${reset}
`

export const AppContainer = style.div`
  text-align: center;

  h1 {
    font-size: 30px;
    font-weight: bold;
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
  }
`

export const PagesContainer = style.div`
  min-height: calc(100vh - 300px);
  width: 80%;
  margin: 60px auto;
  padding: 60px 0;
`
