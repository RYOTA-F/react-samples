import { FC } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
/* styles */
import ReactProSidebarCSS from './style'

type SidebarProps = {
  isSidebarOpen: boolean
}

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen }) => {
  return (
    <>
      <>
        <ReactProSidebarCSS isOpen={isSidebarOpen} />
        <ProSidebar>
          <Menu>
            <MenuItem icon={<div>hoge</div>}>Dashboard</MenuItem>
            <SubMenu title="Components" icon={<div>fuga</div>}>
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
      </>
    </>
  )
}

export default Sidebar
