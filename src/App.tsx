import { FC } from 'react'
import { RecoilRoot } from 'recoil'
import Router from './Router'

const App: FC = () => {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  )
}

export default App
