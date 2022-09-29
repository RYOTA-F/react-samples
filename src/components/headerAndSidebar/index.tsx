import { FC, useState } from 'react'
/* components */
import Header from '../header'
import Sidebar from '../sidebar'
import CodeBlockSidebar from '../codeBlockSidebar'

const HeaderAndSidebar: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { CodeButton } = CodeBlockSidebar()

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <CodeButton />
    </>
  )
}

export default HeaderAndSidebar
