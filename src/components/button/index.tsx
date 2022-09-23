import { FC, ReactNode } from 'react'
/* styles */
import { Container } from './style'

type ColorType = 'main'

export type ButtonProps = {
  colorType?: ColorType
  childlen: ReactNode
  onClick: () => void
  height?: number
  width?: number
  margin?: number
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
}

const Button: FC<ButtonProps> = ({
  colorType = 'main',
  childlen,
  onClick,
  height = 50,
  width = 200,
  margin = 0,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
}) => {
  return (
    <Container
      colorType={colorType}
      onClick={onClick}
      height={height}
      width={width}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {childlen}
    </Container>
  )
}

export default Button
