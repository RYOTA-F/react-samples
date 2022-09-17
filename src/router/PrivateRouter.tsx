import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import authState from '../lib/recoil/atom/auth'
import { RouterProps } from '../types/router'
import SignIn from '../pages/signIn'

const PrivateRouter: FC<RouterProps> = (props) => {
  const authUser = useRecoilValue(authState)

  return authUser ? (
    <Routes>
      <Route {...props} />
    </Routes>
  ) : (
    <SignIn />
  )
}

export default PrivateRouter
