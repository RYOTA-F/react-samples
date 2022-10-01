const USE_STATE = {
  fileName: '/src/pages/useState/index.tsx',
  code: `
import { FC, useState } from 'react'
/* components */
import Button from '../../components/button'
/* styles */
import { Count } from './style'

const UseState: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count>{count}</Count>
      <Button childlen="+" onClick={() => setCount(count + 1)} />
      <Button childlen="-" onClick={() => setCount(count - 1)} />
    </>
  )
}

export default UseState
`,
}

export const USE_EFFECT = {
  fileName: '/src/pages/useEffect/index.tsx',
  code: `
import { FC, useState, useEffect } from 'react'
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
`,
}

export const SAMPLE_SRC_SET = {
  USE_STATE,
  USE_EFFECT,
}
