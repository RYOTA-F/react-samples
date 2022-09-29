import { useState } from 'react'
/* styles */
import { OpenButton } from './style'

const CodeBlockSidebar = () => {
  const [isView, setIsView] = useState(false)

  const CodeButton = () => (
    <>
      <OpenButton onClick={() => setIsView(!isView)}>{'< / >'}</OpenButton>
      {isView && <></>}
    </>
  )

  return { CodeButton }
}

export default CodeBlockSidebar
