import { FC } from 'react'
import { RecoilRoot } from 'recoil'
import Router from './router'
import { AppContainer } from './App.style'

const App: FC = () => {
  return (
    <AppContainer>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </AppContainer>
  )
}

export default App
