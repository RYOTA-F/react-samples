import { FC } from 'react'
import { RecoilRoot } from 'recoil'
import RecoilizeDebugger from 'recoilize'
import { ThemeProvider } from 'styled-components'
/* components */
import Header from './components/header'
import Footer from './components/footer'
/* router */
import Router from './router'
/* styles */
import { GlobalStyle, AppContainer } from './App.style'
import APP_THEME from './Theme.style'

const App: FC = () => {
  return (
    <AppContainer>
      <RecoilRoot>
        <RecoilizeDebugger />
        <GlobalStyle />
        <ThemeProvider theme={APP_THEME}>
          <Header />
          <Router />
          <Footer />
        </ThemeProvider>
      </RecoilRoot>
    </AppContainer>
  )
}

export default App
