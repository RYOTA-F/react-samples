import { FC } from 'react'
import { useRecoilValue } from 'recoil'
/* styles */
import { UserIcon, UserName } from './style'
/* store */
import signInUserState, { SignInUserStateType } from '../../store/auth'

const UserInfo: FC = () => {
  const signInUser = useRecoilValue<SignInUserStateType>(signInUserState)
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
