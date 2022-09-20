import { FC, useEffect } from 'react'
/* components */
import Loading from '../../components/loading'

const LoadingTest: FC = () => {
  const { RenderLoading, isLoading, setIsLoading } = Loading()

  useEffect(() => {
    if (!isLoading) return
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [isLoading, setIsLoading])

  return (
    <>
      <h1>LoadingTest</h1>
      <button onClick={() => setIsLoading(true)}>Change Loading</button>
      <RenderLoading />
    </>
  )
}

export default LoadingTest
