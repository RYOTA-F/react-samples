import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
/* libs */
import { signOutWithGoogle } from '../../lib/auth/google'
/* styles */
import { Button } from './style'

const SignOutButton: FC = () => {
  const navigate = useNavigate()

  /**
   * サインアウトをクリック
   */
  const onClickSignOut = async () => {
    const signOut = await signOutWithGoogle()
    if (signOut) navigate('/sign_in')
  }

  return (
    <>
      <Button onClick={onClickSignOut}>サインアウト</Button>
    </>
  )
}

export default SignOutButton
