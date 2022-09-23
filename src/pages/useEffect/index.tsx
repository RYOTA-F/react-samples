import { FC, useState, useEffect } from 'react'
/* components */
import PageTitle from '../../components/pageTitle'
/* styles */
import { FetchSample, DataItem, UserData, MainData, Contents } from './style'
/* types */
import { Jsonplaceholder } from '../../types/jsonplaceholder'

const UseEffect: FC = () => {
  const [data, setData] = useState<Jsonplaceholder[]>([])

  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const resJson: Jsonplaceholder[] = await res.json()
    setData(resJson)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <PageTitle title="UseEffect" />
      <FetchSample>
        Fetch API:{' '}
        <a href="https://jsonplaceholder.typicode.com/posts" target="_brank">
          https://jsonplaceholder.typicode.com/posts
        </a>
      </FetchSample>
      {data?.map((v, i) => (
        <DataItem key={i}>
          <UserData>
            User Id: <Contents>{v.userId}</Contents>
          </UserData>
          <UserData>
            Id: <Contents>{v.id}</Contents>
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

export default UseEffect
