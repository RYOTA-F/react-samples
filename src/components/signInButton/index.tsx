import { FC } from 'react'
/* libs */
import { signInWithGoogle } from '../../lib/auth/google'
/* styles */
import { Button } from './style'

const SignInButton: FC = () => {
  /**
   * サインインをクリック
   */
  const onClickSignIn = async () => {
    const authUser = await signInWithGoogle()
    // if (authUser) setAuth(authUser)
  }

  return <Button onClick={onClickSignIn}>Googleでサインイン</Button>
}

export default SignInButton
