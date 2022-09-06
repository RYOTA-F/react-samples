import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import LocalStorage from './pages/localStorage'
import Swr from './pages/swr'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/local_storage" element={<LocalStorage />} />
        <Route path="/swr" element={<Swr />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
