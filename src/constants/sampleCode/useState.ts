export const USE_STATE_CODE = [
  {
    fileName: '/src/pages/useState/index.tsx',
    code: `import { FC, useState } from 'react'
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
  },
]
