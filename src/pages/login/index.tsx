import { FC } from 'react'
import { useRecoilValue } from 'recoil'
/* components */
import SignInButton from '../../components/signInButton'
import SignOutButton from '../../components/signOutButton'
import UserInfo from '../../components/userInfo'
/* libs */
import authState from '../../lib/recoil/atom/auth'
/* styles */
import { LoginContainer } from './style'

const Login: FC = () => {
  const authUser = useRecoilValue(authState)

  return (
    <LoginContainer>
      <h1>Login</h1>

      {authUser ? (
        <>
          <UserInfo />
          <div>
            <SignOutButton />
          </div>
        </>
      ) : (
        <SignInButton />
      )}
    </LoginContainer>
  )
}

export default Login
