import { FC } from 'react'
import { useSetRecoilState } from 'recoil'
/* libs */
import { signInWithGoogle } from '../../lib/auth/google'
/* styles */
import { Button } from './style'
import authState from '../../lib/recoil/atom/auth'

const SignInButton: FC = () => {
  const setAuth = useSetRecoilState(authState)

  /**
   * サインインをクリック
   */
  const onClickSignIn = async () => {
    const authUser = await signInWithGoogle()
    if (authUser) setAuth(authUser)
  }

  return <Button onClick={onClickSignIn}>Googleでサインイン</Button>
}

export default SignInButton
