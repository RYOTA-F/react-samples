export const USE_LOCAL_STORAGE_CODE = [
  {
    fileName: '/src/pages/useLocalStorage/index.tsx',
    code: `import { FC } from 'react'
/* components */
import Button from '../../components/button'
/* libs */
import useLocalStorage from '../../lib/hooks/useLocalStorage'
/* styles */
import { Count } from './style'

const UseLocalStorage: FC = () => {
  const [value, setValue] = useLocalStorage('test', 0)

  return (
    <>
      <Count>{value}</Count>
      <Button childlen="+" colorType="sub" onClick={() => setValue(value + 1)} />
      <Button childlen="Clear" colorType="silver" onClick={() => setValue(0)} marginLeft={20} />
      <Button childlen="-" colorType="sub" onClick={() => setValue(value - 1)} marginLeft={20} />
    </>
  )
}

export default UseLocalStorage`,
  },
  {
    fileName: '/src/lib/hooks/useLocalStorage.tsx',
    code: `import { useState, useEffect } from 'react'

const useLocalStorage = <T,>(key: string, defaultValue: T) => {
  const [value, setValue] = useState(() => {
    const jsonValue = window.localStorage.getItem(key)
    if (jsonValue !== null) return JSON.parse(jsonValue)

    return defaultValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [value, setValue])

  return [value, setValue]
}

export default useLocalStorage`,
  },
]
