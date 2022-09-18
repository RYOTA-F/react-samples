import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
/* components */
import SignIn from '../pages/signIn'
/* libs */
import useGoogleSignInUser from '../lib/hooks/useGoogleSignInUser'
/* types */
import { RouterProps } from '../types/router'

const PrivateRouter: FC<RouterProps> = (props) => {
  const authUser = useGoogleSignInUser()

  return authUser.uid ? (
    <Routes>
      <Route {...props} />
    </Routes>
  ) : (
    <Route path={props.path} element={<Navigate to="/" />} />
  )
}

export default PrivateRouter
