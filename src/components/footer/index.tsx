import { FC } from 'react'
/* styles */
import { Container, CopyRight, CopyRightMark } from './style'

const Footer: FC = () => {
  return (
    <Container>
      <CopyRight>
        <CopyRightMark>©</CopyRightMark> 2022 RYOTA-F
      </CopyRight>
    </Container>
  )
}

export default Footer
