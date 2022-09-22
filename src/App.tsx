import { FC } from 'react'
import { RecoilRoot } from 'recoil'
import RecoilizeDebugger from 'recoilize'
/* components */
import Header from './components/header'
import Footer from './components/footer'
/* router */
import Router from './router'
/* styles */
import { GlobalStyle, AppContainer } from './App.style'

const App: FC = () => {
  return (
    <AppContainer>
      <RecoilRoot>
        <RecoilizeDebugger />
        <GlobalStyle />
        <Header />
        <Router />
        <Footer />
      </RecoilRoot>
    </AppContainer>
  )
}

export default App
