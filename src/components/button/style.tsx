import style from 'styled-components'
/* types */
import { ButtonProps } from './index'

type ContainerProps = Omit<Required<ButtonProps>, 'childlen' | 'onClick'>

export const Container = style.button<ContainerProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  margin: ${(props) => props.margin}px;
  margin-top: ${(props) => (props.margin ? props.margin : props.marginTop)}px;
  margin-bottom: ${(props) => (props.margin ? props.margin : props.marginBottom)}px;
  margin-left: ${(props) => (props.margin ? props.margin : props.marginLeft)}px;
  margin-right: ${(props) => (props.margin ? props.margin : props.marginRight)}px;
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;

  background: ${(props) => {
    switch (props.colorType) {
      case 'main':
        return props.theme.colors.main
      case 'sub':
        return props.theme.colors.sub
      case 'silver':
        return props.theme.colors.silver
      default:
        return props.theme.colors.main
    }
  }};

  &:hover {
    cursor: pointer;
  }
`
