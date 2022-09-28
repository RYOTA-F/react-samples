import { FC, useEffect } from 'react'
/* components */
import Button from '../../components/button'
import Loading from '../../components/loading'
import PageTitle from '../../components/pageTitle'

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
      <PageTitle title="LoadingTest" />
      <Button childlen="Loading ON" colorType="sub" onClick={() => setIsLoading(true)} />
      <RenderLoading />
    </>
  )
}

export default LoadingTest
