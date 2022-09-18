import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
/* store */
import { signInUserState } from '../store/auth'

type RouteAuthGuardProp = {
  component: React.ReactNode
  redirect: string
}

const RouteAuthGuard: FC<RouteAuthGuardProp> = ({ component, redirect }) => {
  const signInUser = useRecoilValue(signInUserState)

  if (!signInUser.uid) {
    return <Navigate to={redirect} replace={false} />
  }

  return <>{component}</>
}

export default RouteAuthGuard
