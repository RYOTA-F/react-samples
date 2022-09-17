import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { RouterProps } from '../types/router'
import SignOut from '../pages/signOut'

const GuestRouter: FC<RouterProps> = (props) => {
  const authUser = false

  return authUser ? (
    <SignOut />
  ) : (
    <Routes>
      <Route {...props} />
    </Routes>
  )
}

export default GuestRouter
