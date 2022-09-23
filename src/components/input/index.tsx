import { Dispatch, FC, SetStateAction } from 'react'
/* styles */
import { Container } from './style'

export type InputProps = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  height?: number
  width?: number
}

const Input: FC<InputProps> = ({ value, setValue, height = 30, width = 150 }) => {
  return (
    <Container
      value={value}
      onChange={(e) => setValue(e.target.value)}
      height={height}
      width={width}
    />
  )
}

export default Input
