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
  margin-top: 15rem;
`
