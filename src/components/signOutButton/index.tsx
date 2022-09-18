import { FC } from 'react'
/* libs */
import { signOutWithGoogle } from '../../lib/auth/google'
/* styles */
import { Button } from './style'

const SignOutButton: FC = () => {
  /**
   * サインアウトをクリック
   */
  const onClickSignOut = async () => {
    await signOutWithGoogle()
  }

  return (
    <>
      <Button onClick={onClickSignOut}>サインアウト</Button>
    </>
  )
}

export default SignOutButton
