import { FC } from 'react'
import { RecoilRoot } from 'recoil'
import Router from './router'
import { AppContainer } from './App.style'

const App: FC = () => {
  return (
    <RecoilRoot>
      <AppContainer>
        <Router />
      </AppContainer>
    </RecoilRoot>
  )
}

export default App
