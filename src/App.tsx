import { FC } from 'react'
import { RecoilRoot } from 'recoil'
import RecoilizeDebugger from 'recoilize'
import Router from './router'
import { AppContainer } from './App.style'

const App: FC = () => {
  return (
    <AppContainer>
      <RecoilRoot>
        <RecoilizeDebugger />
        <Router />
      </RecoilRoot>
    </AppContainer>
  )
}

export default App
