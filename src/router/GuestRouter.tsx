import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
/* components */
import SignOut from '../pages/signOut'
/* libs */
import useGoogleSignInUser from '../lib/hooks/useGoogleSignInUser'
/* types */
import { RouterProps } from '../types/router'

const GuestRouter: FC<RouterProps> = (props) => {
  const authUser = useGoogleSignInUser()

  return authUser.uid ? (
    <SignOut />
  ) : (
    <Routes>
      <Route {...props} />
    </Routes>
  )
}

export default GuestRouter
