import { FC } from 'react'
/* styles */
import { Container } from './style'

type PageTitleProps = {
  title: string
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return <Container>{title}</Container>
}

export default PageTitle
