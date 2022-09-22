import { FC } from 'react'
/* components */
import OnetimePassword from '../../components/onetimePassword'
import PageTitle from '../../components/pageTitle'
/* libs */
import { createRandomNumber } from '../../lib/onetimePassword'

const OnetimePasswordTest: FC = () => {
  const rundomNumber = createRandomNumber(100000, 999999)

  return (
    <>
      <PageTitle title="OnetimePassword" />
      <p>OnetimePass: {rundomNumber}</p>
      <hr />
      <OnetimePassword onetimePassword={rundomNumber} />
    </>
  )
}

export default OnetimePasswordTest
