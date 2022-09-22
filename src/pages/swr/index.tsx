import { FC } from 'react'
import useSWR from 'swr'
/* components */
import PageTitle from '../../components/pageTitle'
/* libs */
import fetcher from '../../lib/fetch'
/* types */
import { Jsonplaceholder } from '../../types/jsonplaceholder'

const Swr: FC = () => {
  const { data, error } = useSWR<Jsonplaceholder[]>(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  )

  return (
    <>
      <PageTitle title="Swr" />
      {error && <div>Error: {error}</div>}
      {data?.map((v, i) => (
        <div key={i}>
          userId: {v.userId}
          id: {v.id}
          title: {v.title}
          body: {v.body}
        </div>
      ))}
    </>
  )
}

export default Swr
