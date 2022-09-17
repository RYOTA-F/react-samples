import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
/* router */
import GuestRouter from '../router/GuestRouter'
import PrivateRouter from '../router/PrivateRouter'
import PublicRouter from '../router/PublicRouter'
/* pages */
import Home from '../pages/home'
import NotFound from '../pages/notFound'
import UseLocalStorage from '../pages/useLocalStorage'
import Swr from '../pages/swr'
import UseState from '../pages/useState'
import UseEffect from '../pages/useEffect'
import UseContext from '../pages/useContext'
import UseReducer from '../pages/useReducer'
import UseRef from '../pages/useRef'
import Redux from '../pages/redux'
import ReduxToolkit from '../pages/reduxToolkit'
import AutoSuggest from '../pages/autoSuggest'
import LoadingTest from '../pages/loading'
import ModalTest from '../pages/modal'
import SignIn from '../pages/signIn'
import SignOut from '../pages/signOut'

const Router: FC = () => {
  return (
    <>
      <BrowserRouter>
        {/* Guest */}
        <PublicRouter path="/sign_in" element={<SignIn />} />
        {/* Guest */}

        {/* Private */}
        <PublicRouter path="/modal" element={<ModalTest />} />
        <PublicRouter path="/sign_out" element={<SignOut />} />
        {/* Private */}

        {/* Public */}
        <PublicRouter path="/" element={<Home />} />
        <PublicRouter path="/swr" element={<Swr />} />
        <PublicRouter path="/use_local_storage" element={<UseLocalStorage />} />
        <PublicRouter path="/use_state" element={<UseState />} />
        <PublicRouter path="/use_effect" element={<UseEffect />} />
        <PublicRouter path="/use_context" element={<UseContext />} />
        <PublicRouter path="/use_reducer" element={<UseReducer />} />
        <PublicRouter path="/use_callback" element={<UseRef />} />
        <PublicRouter path="/redux_toolkit" element={<ReduxToolkit />} />
        <PublicRouter path="/redux" element={<Redux />} />
        <PublicRouter path="/auto_suggest" element={<AutoSuggest />} />
        <GuestRouter path="/loading" element={<LoadingTest />} />
        {/* Public */}

        {/* NotFound */}
        {/* <PublicRoute path="*" element={<NotFound />} /> */}
      </BrowserRouter>
    </>
  )
}

export default Router
