import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import {
  HOOKS_PAGE_LIST,
  CUSTOM_HOOK_PAGE_LIST,
  GLOBAL_STATE_PAGE_LIST,
  LIBRARY_PAGE_LIST,
  CUSTOM_COMPONENT_PAGE_LIST,
  AUTH_PAGES,
} from '../../constants/pages'
/* styles */
import ReactProSidebarCSS, { Link, Border } from './style'
/* store */
import signInUserState, { SignInUserStateType } from '../../store/auth'

type SidebarProps = {
  isSidebarOpen: boolean
}

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen }) => {
  const isSignedIn = useRecoilValue<SignInUserStateType>(signInUserState).login

  return (
    <>
      <>
        <ReactProSidebarCSS isOpen={isSidebarOpen} />
        <ProSidebar>
          <Menu>
            <MenuItem icon={<div>👉</div>}>
              <Link href="/">TOP</Link>
            </MenuItem>

            <Border />

            <SubMenu title="React Hooks" icon={<div>👉</div>}>
              {HOOKS_PAGE_LIST.map((v, i) => (
                <MenuItem key={i}>
                  <Link href={v.url}>{v.title}</Link>
                </MenuItem>
              ))}
            </SubMenu>

            <SubMenu title="Custom Hooks" icon={<div>👉</div>}>
              {CUSTOM_HOOK_PAGE_LIST.map((v, i) => (
                <MenuItem key={i}>
                  <Link href={v.url}>{v.title}</Link>
                </MenuItem>
              ))}
            </SubMenu>

            <SubMenu title="Library" icon={<div>👉</div>}>
              {LIBRARY_PAGE_LIST.map((v, i) => (
                <MenuItem key={i}>
                  <Link href={v.url}>{v.title}</Link>
                </MenuItem>
              ))}
            </SubMenu>

            <SubMenu title="Custom Component" icon={<div>👉</div>}>
              {CUSTOM_COMPONENT_PAGE_LIST.map((v, i) => (
                <MenuItem key={i}>
                  <Link href={v.url}>{v.title}</Link>
                </MenuItem>
              ))}
            </SubMenu>

            <SubMenu title="Global State" icon={<div>👉</div>}>
              {GLOBAL_STATE_PAGE_LIST.map((v, i) => (
                <MenuItem key={i}>
                  <Link href={v.url}>{v.title}</Link>
                </MenuItem>
              ))}
            </SubMenu>

            <Border />

            {isSignedIn ? (
              <>
                <MenuItem icon={<div>👉</div>}>
                  <Link href={AUTH_PAGES.MY_PAGE.url}>{AUTH_PAGES.MY_PAGE.title}</Link>
                </MenuItem>

                <MenuItem icon={<div>👉</div>}>
                  <Link href={AUTH_PAGES.SIGN_OUT.url}>{AUTH_PAGES.SIGN_OUT.title}</Link>
                </MenuItem>
              </>
            ) : (
              <MenuItem icon={<div>👉</div>}>
                <Link href={AUTH_PAGES.SIGN_IN.url}>{AUTH_PAGES.SIGN_IN.title}</Link>
              </MenuItem>
            )}

            <Border />
          </Menu>
        </ProSidebar>
      </>
    </>
  )
}

export default Sidebar
