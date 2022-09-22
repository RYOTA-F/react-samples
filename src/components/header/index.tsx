import { FC } from 'react'
/* styles */
import { Container, Title } from './style'

type HeaderProps = {
  title?: string
}

const Header: FC<HeaderProps> = ({ title = 'React Samples' }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

export default Header
