import { ReactNode, useState } from 'react'
import ReactModal from 'react-modal'
/* styles */
import { modalStyle } from './style'

const Modal = () => {
  const [isViewModal, setIsViewModal] = useState(false)

  const RenderModal = ({ children }: { children: ReactNode }) => {
    return (
      <>
        {isViewModal && (
          <ReactModal
            isOpen={isViewModal}
            onRequestClose={() => setIsViewModal(false)}
            ariaHideApp={false}
            style={modalStyle}
          >
            {children}
          </ReactModal>
        )}
      </>
    )
  }

  return { RenderModal, isViewModal, setIsViewModal }
}

export default Modal
