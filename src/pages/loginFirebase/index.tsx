import { FC } from 'react'
/* components */
import SignInButton from '../../components/signInButton'
import SignOutButton from '../../components/signOutButton'
import UserInfo from '../../components/userInfo'
/* libs */
import { useIsSigned } from '../../lib/auth/google'
/* styles */
import { LoginContainer } from './style'

const LoginFirebase: FC = () => {
  return (
    <LoginContainer>
      <h1>LoginFirebase</h1>
      {useIsSigned() ? (
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

export default LoginFirebase
