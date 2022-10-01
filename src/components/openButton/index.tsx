import { FC, Dispatch, SetStateAction } from 'react'
import { Conteinr, Span1, Span2, Span3 } from './style'

type OpenButtonProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const OpenButton: FC<OpenButtonProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Conteinr onClick={() => setIsOpen(!isOpen)}>
      <Span1 isOpen={isOpen} />
      <Span2 isOpen={isOpen} />
      <Span3 isOpen={isOpen} />
    </Conteinr>
  )
}

export default OpenButton
