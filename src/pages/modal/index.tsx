import { FC } from 'react'
/* components */
import Modal from '../../components/modal'

const ModalTest: FC = () => {
  const { RenderModal, isViewModal, setIsViewModal } = Modal()

  return (
    <>
      <h1>ModalTest</h1>
      <button onClick={() => setIsViewModal(!isViewModal)}>View Modal</button>
      <RenderModal>
        <div>エリア外クリックでモーダルを閉じる</div>
      </RenderModal>
    </>
  )
}

export default ModalTest
