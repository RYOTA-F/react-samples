import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/notFound'
import UseLocalStorage from './pages/useLocalStorage'
import Swr from './pages/swr'
import UseState from './pages/useState'
import UseEffect from './pages/useEffect'
import UseContext from './pages/useContext'
import UseReducer from './pages/useReducer'
import UseRef from './pages/useRef'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swr" element={<Swr />} />
        <Route path="/use_local_storage" element={<UseLocalStorage />} />
        <Route path="/use_state" element={<UseState />} />
        <Route path="/use_effect" element={<UseEffect />} />
        <Route path="/use_context" element={<UseContext />} />
        <Route path="/use_reducer" element={<UseReducer />} />
        <Route path="/use_callback" element={<UseRef />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
