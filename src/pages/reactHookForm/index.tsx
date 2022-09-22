import { FC, useState } from 'react'
/* components */
import Form from '../../components/form'
import PageTitle from '../../components/pageTitle'

export type Data = {
  data: {
    firstName: string
    lastName: string
    email: string
  }
}

const ReactHookForm: FC = () => {
  const [data, setData] = useState<Data>({
    data: {
      firstName: '',
      lastName: '',
      email: '',
    },
  })

  return (
    <>
      <PageTitle title="ReactHookForm" />
      <p>
        Name: {data.data.firstName} {data.data.lastName}
      </p>
      <p>Email: {data.data.email}</p>

      <hr />
      <Form setData={setData} />
    </>
  )
}

export default ReactHookForm
