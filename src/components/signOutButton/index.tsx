import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useResetRecoilState } from 'recoil'
/* libs */
import { signOutWithGoogle } from '../../lib/auth/google'
/* styles */
import { Button } from './style'
/* store */
import signInUserState from '../../store/auth'

const SignOutButton: FC = () => {
  const navigate = useNavigate()
  const resetSignInUser = useResetRecoilState(signInUserState)

  /**
   * サインアウトをクリック
   */
  const onClickSignOut = async () => {
    const signOut = await signOutWithGoogle()

    if (signOut) {
      resetSignInUser()
      navigate('/sign_in')
    }
  }

  return (
    <>
      <Button onClick={onClickSignOut}>サインアウト</Button>
    </>
  )
}

export default SignOutButton
