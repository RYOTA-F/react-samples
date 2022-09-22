import { FC } from 'react'
/* components */
import SignOutButton from '../../components/signOutButton'
import PageTitle from '../../components/pageTitle'

const SignOut: FC = () => {
  return (
    <>
      <PageTitle title="SignOut" />
      <SignOutButton />
    </>
  )
}

export default SignOut
