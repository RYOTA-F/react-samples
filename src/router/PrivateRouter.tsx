import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { RouterProps } from '../types/router'
import SignIn from '../pages/signIn'
/* libs */
import { useGoogleAuth } from '../lib/auth/google'

const PrivateRouter: FC<RouterProps> = (props) => {
  const authUser = useGoogleAuth()

  return authUser.uid ? (
    <Routes>
      <Route {...props} />
    </Routes>
  ) : (
    <Route path={props.path} element={<Navigate to="/" />} />
  )
}

export default PrivateRouter
