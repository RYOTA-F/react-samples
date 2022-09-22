import { FC } from 'react'
import { RecoilRoot } from 'recoil'
import RecoilizeDebugger from 'recoilize'
/* router */
import Router from './router'
/* styles */
import GlobalStyle from './Global.style'
import { AppContainer } from './App.style'

const App: FC = () => {
  return (
    <AppContainer>
      <RecoilRoot>
        <RecoilizeDebugger />
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </AppContainer>
  )
}

export default App
