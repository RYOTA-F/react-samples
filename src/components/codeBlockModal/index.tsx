import { FC } from 'react'
import { useLocation } from 'react-router-dom'
/* components */
import Modal from '../modal'
import SyntaxHighlighter from '../syntaxHighlighter'
/* libs */
import { getCodeByLocation } from '../../lib/codeBlock'
/* styles */
import { ModalOpenButton } from './style'

const CodeBlockModal: FC = () => {
  const { RenderModal, isViewModal, setIsViewModal } = Modal()
  const location = useLocation()
  const src = getCodeByLocation(location)

  return (
    <>
      <ModalOpenButton onClick={() => setIsViewModal(!isViewModal)}>{'< / >'}</ModalOpenButton>
      {isViewModal && (
        <RenderModal>
          {src && <SyntaxHighlighter code={src.code} fileName={src.fileName} />}
        </RenderModal>
      )}
    </>
  )
}

export default CodeBlockModal
