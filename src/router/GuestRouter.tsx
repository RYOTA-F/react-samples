import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import authState from '../lib/recoil/atom/auth'
import { RouterProps } from '../types/router'
import SignOut from '../pages/signOut'

const GuestRouter: FC<RouterProps> = (props) => {
  const authUser = useRecoilValue(authState)

  return authUser ? (
    <SignOut />
  ) : (
    <Routes>
      <Route {...props} />
    </Routes>
  )
}

export default GuestRouter
