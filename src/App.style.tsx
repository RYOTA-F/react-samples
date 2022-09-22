import style, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

/**
 * Reset CSS
 */
export const GlobalStyle = createGlobalStyle`
  ${reset}

  h1 {
    font-size: 30px;
    font-weight: bold;
  }
`

export const AppContainer = style.div`
  text-align: center;
  margin-top: 20rem;
`
