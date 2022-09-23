import style from 'styled-components'
/* types */
import { InputProps } from './index'

type ContainerProps = Omit<Required<InputProps>, 'value' | 'setValue'>

export const Container = style.input<ContainerProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  border-radius: 5px;
`
