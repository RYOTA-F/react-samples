import { FC } from 'react'
/* libs */
import useGoogleSignInUser from '../../lib/hooks/useGoogleSignInUser'
/* styles */
import { UserIcon, UserName } from './style'

const UserInfo: FC = () => {
  const signInUser = useGoogleSignInUser()
  const userName = signInUser.displayName
  const photoUrl = signInUser.photoUrl

  return (
    <>
      {photoUrl && <UserIcon src={photoUrl} />}
      {userName && <UserName>{userName}</UserName>}
    </>
  )
}

export default UserInfo
