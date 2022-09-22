import { FC } from 'react'
/* components */
import PageTitle from '../../components/pageTitle'
/* libs */
import useLocalStorage from '../../lib/hooks/useLocalStorage'

const UseLocalStorage: FC = () => {
  const [value, setValue] = useLocalStorage('test', 0)

  return (
    <>
      <PageTitle title="LocalStorage" />
      <div>{value}</div>
      <div>
        <button onClick={() => setValue(value + 1)}>+</button>
      </div>
    </>
  )
}

export default UseLocalStorage
