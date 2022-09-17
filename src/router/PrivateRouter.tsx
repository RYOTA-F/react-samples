import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { RouterProps } from '../types/router'
import SignIn from '../pages/signIn'

const PrivateRouter: FC<RouterProps> = (props) => {
  const authUser = true

  return authUser ? (
    <Routes>
      <Route {...props} />
    </Routes>
  ) : (
    <SignIn />
  )
}

export default PrivateRouter
