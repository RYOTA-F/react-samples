import { FC } from 'react'
import useLocalStorage from '../../lib/hooks/useLocalStorage'

const LocalStorage: FC = () => {
  const [value, setValue] = useLocalStorage('test', 0)

  return (
    <>
      <h1>LocalStorage</h1>
      <div>{value}</div>
      <div>
        <button onClick={() => setValue(value + 1)}>+</button>
      </div>
    </>
  )
}

export default LocalStorage
