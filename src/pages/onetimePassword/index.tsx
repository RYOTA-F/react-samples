import { FC, useState } from 'react'
/* components */
import OnetimePassword from '../../components/onetimePassword'
import PageTitle from '../../components/pageTitle'
/* libs */
import { createRandomNumber } from '../../lib/onetimePassword'
/* styles */
import { Sample, SumpleNumber } from './style'

const OnetimePasswordTest: FC = () => {
  const [isMatchPass, setIsMatchPass] = useState(false)

  const rundomNumber = createRandomNumber(100000, 999999)

  const submitAction = (value: boolean) => {
    setIsMatchPass(value)
  }

  return (
    <>
      <PageTitle title="OnetimePassword" />
      <Sample>
        OnetimePass: <SumpleNumber>{rundomNumber}</SumpleNumber>
      </Sample>
      {isMatchPass && <div>Password Match!!</div>}
      <hr />
      <OnetimePassword onetimePassword={rundomNumber} submitAction={submitAction} />
    </>
  )
}

export default OnetimePasswordTest
