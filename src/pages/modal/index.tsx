import { FC } from 'react'
/* components */
import Modal from '../../components/modal'
import PageTitle from '../../components/pageTitle'

const ModalTest: FC = () => {
  const { RenderModal, isViewModal, setIsViewModal } = Modal()

  return (
    <>
      <PageTitle title="ModalTest" />
      <button onClick={() => setIsViewModal(!isViewModal)}>View Modal</button>
      <RenderModal>
        <div>エリア外クリックでモーダルを閉じる</div>
      </RenderModal>
    </>
  )
}

export default ModalTest
