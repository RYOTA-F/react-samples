import { FC } from 'react'
/* components */
import OnetimePassword from '../../components/onetimePassword'
/* libs */
import { createRandomNumber } from '../../lib/onetimePassword'

const OnetimePasswordTest: FC = () => {
  const rundomNumber = createRandomNumber(100000, 999999)

  return (
    <>
      <h1>OnetimePassword</h1>
      <p>OnetimePass: {rundomNumber}</p>
      <hr />
      <OnetimePassword onetimePassword={rundomNumber} />
    </>
  )
}

export default OnetimePasswordTest
