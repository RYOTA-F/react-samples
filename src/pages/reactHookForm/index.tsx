import { FC, useState } from 'react'
/* components */
import Form from '../../components/form'

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
      <h1>ReactHookForm</h1>
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
