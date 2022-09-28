import { FC, useState } from 'react'
/* components */
import Form from '../../components/form'
import PageTitle from '../../components/pageTitle'

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
      <p>
        Name: {data.firstName} {data.lastName}
      </p>
      <p>Email: {data.email}</p>

      <hr />
      <Form setData={setData} />
    </>
  )
}

export default ReactHookForm
