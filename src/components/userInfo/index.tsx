import { FC } from 'react'
/* libs */
import { useGoogleAuth } from '../../lib/auth/google'
/* styles */
import { UserIcon, UserName } from './style'

const UserInfo: FC = () => {
  const signInUser = useGoogleAuth()
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
