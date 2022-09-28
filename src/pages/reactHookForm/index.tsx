import { FC, useState } from 'react'
/* components */
import Form from '../../components/form'
import PageTitle from '../../components/pageTitle'
/* styles */
import { DataContainer, DataValue } from './style'

export type Data = {
  firstName: string
  lastName: string
  email: string
}

const ReactHookForm: FC = () => {
  const [data, setData] = useState<Data>({
    firstName: '',
    lastName: '',
    email: '',
  })

  return (
    <>
      <PageTitle title="ReactHookForm" />
      <DataContainer>
        Name:{' '}
        <DataValue>
          {data.firstName} {data.lastName}
        </DataValue>
      </DataContainer>
      <DataContainer>
        Email: <DataValue>{data.email}</DataValue>
      </DataContainer>

      <hr />
      <Form setData={setData} />
    </>
  )
}

export default ReactHookForm
