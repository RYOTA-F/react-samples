import { FC, Dispatch, SetStateAction } from 'react'
/* components */
import OpenButton from '../openButton'
/* styles */
import { Container, Title, Empty } from './style'

type HeaderProps = {
  title?: string
  isSidebarOpen: boolean
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const Header: FC<HeaderProps> = ({ title = 'React Samples', isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <Container>
      <OpenButton isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <Title>{title}</Title>
      <Empty />
    </Container>
  )
}

export default Header
