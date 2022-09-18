import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
/* libs */
import { signInWithGoogle } from '../../lib/auth/google'
/* styles */
import { Button } from './style'

const SignInButton: FC = () => {
  const navigate = useNavigate()

  const onClickSignIn = async () => {
    const signIn = await signInWithGoogle()
    if (signIn.uid) navigate('/my_page')
  }

  return <Button onClick={onClickSignIn}>Googleでサインイン</Button>
}

export default SignInButton
