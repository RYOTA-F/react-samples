import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import UseLocalStorage from './pages/useLocalStorage'
import Swr from './pages/swr'
import UseState from './pages/useState'
import UseEffect from './pages/useEffect'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swr" element={<Swr />} />
        <Route path="/use_local_storage" element={<UseLocalStorage />} />
        <Route path="/use_state" element={<UseState />} />
        <Route path="/use_effect" element={<UseEffect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
