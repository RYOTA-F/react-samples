import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const Global = createGlobalStyle`
  ${reset}
`

const GlobalStyle = () => {
  return <Global />
}

export default GlobalStyle
