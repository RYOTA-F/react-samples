import style from 'styled-components'
/* types */
import { ButtonProps } from './index'

type ContainerProps = Omit<Required<ButtonProps>, 'childlen' | 'onClick'>

export const Container = style.button<ContainerProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  margin: ${(props) => props.margin}px;
  marginTop: ${(props) => props.marginTop}px;
  marginBottom: ${(props) => props.marginBottom}px;
  marginLeft: ${(props) => props.marginLeft}px;
  marginRight: ${(props) => props.marginRight}px;
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;

  background: ${(props) => {
    switch (props.colorType) {
      case 'main':
        return props.theme.colors.main
      default:
        return props.theme.colors.main
    }
  }};

  &:hover {
    cursor: pointer;
  }
`
