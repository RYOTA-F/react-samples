import { FC } from 'react'
/* components */
import UserInfo from '../../components/userInfo'
import PageTitle from '../../components/pageTitle'

const MyPage: FC = () => {
  return (
    <>
      <PageTitle title="MyPage" />
      <UserInfo />
    </>
  )
}

export default MyPage
