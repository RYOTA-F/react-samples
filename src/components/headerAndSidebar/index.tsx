import { FC, useState } from 'react'
/* components */
import Header from '../header'
import Sidebar from '../sidebar'

const HeaderAndSidebar: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </>
  )
}

export default HeaderAndSidebar
