import { FC } from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetch'
import { Jsonplaceholder } from '../../types/jsonplaceholder'

const Swr: FC = () => {
  const { data, error } = useSWR<Jsonplaceholder[]>(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  )

  return (
    <>
      <h1>Swr</h1>
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
