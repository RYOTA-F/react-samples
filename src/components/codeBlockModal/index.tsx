import { FC } from 'react'
/* components */
import Modal from '../modal'
import SyntaxHighlighter from '../syntaxHighlighter'
/* styles */
import { ModalOpenButton } from './style'

type CodeBlockModalProps = {
  code?: string
}

const CodeBlockModal: FC<CodeBlockModalProps> = ({ code }) => {
  const { RenderModal, isViewModal, setIsViewModal } = Modal()

  const CodeBlock = () => <SyntaxHighlighter code={code ? code : ''} />

  return (
    <>
      {code && (
        <>
          <ModalOpenButton onClick={() => setIsViewModal(!isViewModal)}>{'< / >'}</ModalOpenButton>
          {isViewModal && (
            <RenderModal>
              <CodeBlock />
            </RenderModal>
          )}
        </>
      )}
    </>
  )
}

export default CodeBlockModal
