import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
/* store */
import signInUserState, { SignInUserStateType } from '../store/auth'
/* types */
import { PAGE_TYPE, PageType } from '../types/auth'

type RouteAuthGuardProp = {
  component: React.ReactNode
  redirect: string
  type: PageType
}

const RouteAuthGuard: FC<RouteAuthGuardProp> = ({ component, redirect, type }) => {
  const signInUser = useRecoilValue<SignInUserStateType>(signInUserState)

  if (
    (type === PAGE_TYPE.PRIVATE && !signInUser.login) ||
    (type === PAGE_TYPE.GUEST && signInUser.uid)
  ) {
    return <Navigate to={redirect} replace={false} />
  }

  return <>{component}</>
}

export default RouteAuthGuard
