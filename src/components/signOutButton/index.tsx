import { FC } from 'react'
/* libs */
import { signOutWithGoogle } from '../../lib/auth/google'
/* styles */
import { Button } from './style'

const SignOutButton: FC = () => {
  return <Button onClick={signOutWithGoogle}>サインアウト</Button>
}

export default SignOutButton
