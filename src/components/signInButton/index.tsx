import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
/* libs */
import { signInWithGoogle } from '../../lib/auth/google'
/* styles */
import { Button } from './style'
/* store */
import signInUserState, { SignInUserStateType } from '../../store/auth'

const SignInButton: FC = () => {
  const navigate = useNavigate()
  const setSignInUser = useSetRecoilState<SignInUserStateType>(signInUserState)

  const onClickSignIn = async () => {
    const signIn = await signInWithGoogle()

    if (signIn.uid) {
      setSignInUser({
        login: true,
        uid: signIn.uid,
        displayName: String(signIn.displayName),
        photoUrl: String(signIn.photoURL),
      })

      navigate('/my_page')
    }
  }

  return <Button onClick={onClickSignIn}>Googleでサインイン</Button>
}

export default SignInButton
