import { FC } from 'react'
import { RecoilRoot } from 'recoil'
import RecoilizeDebugger from 'recoilize'
import { ThemeProvider } from 'styled-components'
/* components */
import HeaderAndSidebar from './components/headerAndSidebar'
import Footer from './components/footer'
/* router */
import Router from './router'
/* styles */
import { GlobalStyle, AppContainer, PagesContainer } from './App.style'
import APP_THEME from './Theme.style'

const App: FC = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <ThemeProvider theme={APP_THEME}>
        <RecoilRoot>
          <RecoilizeDebugger />
          <HeaderAndSidebar />
          <PagesContainer>
            <Router />
          </PagesContainer>
          <Footer />
        </RecoilRoot>
      </ThemeProvider>
    </AppContainer>
  )
}

export default App
