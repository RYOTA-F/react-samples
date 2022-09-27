import { FC } from 'react'
import useSWR from 'swr'
/* components */
import PageTitle from '../../components/pageTitle'
/* libs */
import fetcher from '../../lib/fetch'
/* styles */
import { FetchSample, DataItem, UserData, Contents, MainData } from './style'
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
      <FetchSample>
        Fetch API:{' '}
        <a href="https://jsonplaceholder.typicode.com/posts" target="_brank">
          https://jsonplaceholder.typicode.com/posts
        </a>
      </FetchSample>

      {error && <div>Error: {error}</div>}
      {data?.map((v, i) => (
        <DataItem key={i}>
          <UserData>
            User ID: <Contents>{v.userId}</Contents>
          </UserData>
          <UserData>
            ID: <Contents>{v.id}</Contents>
          </UserData>
          <MainData>
            <div>
              Title: <Contents>{v.title}</Contents>
            </div>
            <div>
              Body: <Contents>{v.body}</Contents>
            </div>
          </MainData>
        </DataItem>
      ))}
    </>
  )
}

export default Swr
