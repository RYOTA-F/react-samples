import { FC } from 'react'
/* libs */
import { getCurrentUserInfo } from '../../lib/auth/google'
/* styles */
import { UserIcon, UserName } from './style'

const UserInfo: FC = () => {
  const { userName, imageUrl } = getCurrentUserInfo()

  return (
    <>
      <UserIcon src={imageUrl} />
      <UserName>{userName}</UserName>
    </>
  )
}

export default UserInfo
