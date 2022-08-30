import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import LocalStorage from './pages/localStorage'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/local_storage" element={<LocalStorage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
