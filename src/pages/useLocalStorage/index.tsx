import { FC } from 'react'
/* components */
import PageTitle from '../../components/pageTitle'
import Button from '../../components/button'
/* libs */
import useLocalStorage from '../../lib/hooks/useLocalStorage'
/* styles */
import { Count } from './style'

const UseLocalStorage: FC = () => {
  const [value, setValue] = useLocalStorage('test', 0)

  return (
    <>
      <PageTitle title="LocalStorage" />
      <Count>{value}</Count>
      <Button childlen="+" colorType="sub" onClick={() => setValue(value + 1)} />
      <Button childlen="Clear" colorType="silver" onClick={() => setValue(0)} marginLeft={20} />
      <Button childlen="-" colorType="sub" onClick={() => setValue(value - 1)} marginLeft={20} />
    </>
  )
}

export default UseLocalStorage
