import { FC } from 'react'
/* libs */
import { signInWithGoogle } from '../../lib/auth/google'
/* styles */
import { Button } from './style'

const SignInButton: FC = () => {
  return <Button onClick={() => signInWithGoogle()}>Googleでサインイン</Button>
}

export default SignInButton
