import { FC } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
/* components */
import CodeBlockModal from '../components/codeBlockModal'
/* constants */
import {
  HOOKS_PAGES,
  CUSTOM_HOOK_PAGES,
  GLOBAL_STATE_PAGES,
  LIBRARY_PAGES,
  CUSTOM_COMPONENT_PAGES,
  AUTH_PAGES,
} from '../constants/pages'
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
import ReactSyntaxHighlighter from '../pages/reactSyntaxHighlighter'
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
        <CodeBlockModal />
        {/* Public */}
        <Routes>
          <Route index element={<Home />} />
          <Route path={HOOKS_PAGES.USE_STATE.url} element={<UseState />} />
          <Route path={HOOKS_PAGES.USE_EFFECT.url} element={<UseEffect />} />
          <Route path={HOOKS_PAGES.USE_CONTEXT.url} element={<UseContext />} />
          <Route path={HOOKS_PAGES.USE_REDUCER.url} element={<UseReducer />} />
          <Route path={HOOKS_PAGES.USE_REF.url} element={<UseRef />} />
          <Route path={CUSTOM_HOOK_PAGES.USE_LOCAL_STORAGE.url} element={<UseLocalStorage />} />
          <Route path={GLOBAL_STATE_PAGES.REDUX.url} element={<Redux />} />
          <Route path={GLOBAL_STATE_PAGES.REDUX_TOOLKIT.url} element={<ReduxToolkit />} />
          <Route path={LIBRARY_PAGES.SWR.url} element={<Swr />} />
          <Route path={LIBRARY_PAGES.AUTO_SUGGEST.url} element={<AutoSuggest />} />
          <Route path={LIBRARY_PAGES.LOADING.url} element={<LoadingTest />} />
          <Route path={LIBRARY_PAGES.MODAL.url} element={<ModalTest />} />
          <Route path={LIBRARY_PAGES.FORM.url} element={<ReactHookForm />} />
          <Route path={LIBRARY_PAGES.SYNTAX_HIGHLIGHTER.url} element={<ReactSyntaxHighlighter />} />
          <Route
            path={CUSTOM_COMPONENT_PAGES.ONETIME_PASSWORD.url}
            element={<OnetimePasswordTest />}
          />
          {/* Public */}

          {/* Guest */}
          <Route
            path={AUTH_PAGES.SIGN_IN.url}
            element={
              <RouteAuthGuard component={<SignIn />} redirect={'/my_page'} type={PAGE_TYPE.GUEST} />
            }
          />
          {/* Guest */}

          {/* Private */}
          <Route
            path={AUTH_PAGES.SIGN_OUT.url}
            element={
              <RouteAuthGuard component={<SignOut />} redirect={'/'} type={PAGE_TYPE.PRIVATE} />
            }
          />
          <Route
            path={AUTH_PAGES.MY_PAGE.url}
            element={
              <RouteAuthGuard component={<MyPage />} redirect={'/'} type={PAGE_TYPE.PRIVATE} />
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
