import { FC } from 'react'
/* components */
import SignInButton from '../../components/signInButton'
import PageTitle from '../../components/pageTitle'

const SignIn: FC = () => {
  return (
    <>
      <PageTitle title="SignIn" />
      <SignInButton />
    </>
  )
}

export default SignIn
