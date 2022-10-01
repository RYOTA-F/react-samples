import { FC, useState } from 'react'
/* components */
import Header from '../header'
import Sidebar from '../sidebar'
import CodeBlockModal from '../codeBlockModal'

const code = `const hoge = 'hoge'
console.log(hoge)
`

const HeaderAndSidebar: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <CodeBlockModal code={code} />
    </>
  )
}

export default HeaderAndSidebar
