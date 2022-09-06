import { FC, useState, useEffect } from 'react'
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
      <h1>UseEffect</h1>
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

export default UseEffect
