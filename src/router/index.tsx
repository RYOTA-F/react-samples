import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import ReactHookForm from '../pages/reactHookForm'
import OnetimePasswordTest from '../pages/onetimePassword'
import MyPage from '../pages/myPage'
import SignIn from '../pages/signIn'
import SignOut from '../pages/signOut'
/* router */
import RouteAuthGuard from './RouteAuthGuard'
/* types */
import { PAGE_TYPE } from '../types/auth'

const Router: FC = () => {
  return (
    <>
      <BrowserRouter>
        {/* Public */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/swr" element={<Swr />} />
          <Route path="/use_local_storage" element={<UseLocalStorage />} />
          <Route path="/use_state" element={<UseState />} />
          <Route path="/use_effect" element={<UseEffect />} />
          <Route path="/use_context" element={<UseContext />} />
          <Route path="/use_reducer" element={<UseReducer />} />
          <Route path="/use_ref" element={<UseRef />} />
          <Route path="/redux_toolkit" element={<ReduxToolkit />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/auto_suggest" element={<AutoSuggest />} />
          <Route path="/loading" element={<LoadingTest />} />
          <Route path="/modal" element={<ModalTest />} />
          <Route path="/onetime_password" element={<OnetimePasswordTest />} />
          <Route path="/form" element={<ReactHookForm />} />
          {/* Public */}

          {/* Guest */}
          <Route
            path="/sign_in"
            element={
              <RouteAuthGuard component={<SignIn />} redirect={'/my_page'} type={PAGE_TYPE.GUEST} />
            }
          />
          {/* Guest */}

          {/* Private */}
          <Route
            path="/my_page"
            element={
              <RouteAuthGuard component={<MyPage />} redirect={'/'} type={PAGE_TYPE.PRIVATE} />
            }
          />
          <Route
            path="/sign_out"
            element={
              <RouteAuthGuard component={<SignOut />} redirect={'/'} type={PAGE_TYPE.PRIVATE} />
            }
          />
          {/* Private */}

          {/* NotFound */}
          <Route path="*" element={<NotFound />} />
          {/* NotFound */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
