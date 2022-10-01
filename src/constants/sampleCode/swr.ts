export const SWR_CODE = [
  {
    fileName: '/src/pages/swr/index.tsx',
    code: `import { FC } from 'react'
import useSWR from 'swr'
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

export default Swr`,
  },
  {
    fileName: '/src/lib/fetch/index.ts',
    code: `const fetcher = async (url: string) => {
  const res = await fetch(url)
  return await res.json()
}

export default fetcher`,
  },
]
