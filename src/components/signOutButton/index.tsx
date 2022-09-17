import { FC } from 'react'
import { useSetRecoilState } from 'recoil'
/* libs */
import { signOutWithGoogle } from '../../lib/auth/google'
import authState from '../../lib/recoil/atom/auth'
/* styles */
import { Button } from './style'

const SignOutButton: FC = () => {
  const setAuth = useSetRecoilState(authState)

  /**
   * サインアウトをクリック
   */
  const onClickSignOut = async () => {
    const res = await signOutWithGoogle()
    if (res) setAuth(null)
  }

  return (
    <>
      <Button onClick={onClickSignOut}>サインアウト</Button>
    </>
  )
}

export default SignOutButton
