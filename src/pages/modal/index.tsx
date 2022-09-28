import { FC } from 'react'
/* components */
import Button from '../../components/button'
import Modal from '../../components/modal'
import PageTitle from '../../components/pageTitle'
/* styles */
import { ModalContainer, ModalContent } from './style'

const ModalTest: FC = () => {
  const { RenderModal, isViewModal, setIsViewModal } = Modal()

  return (
    <>
      <PageTitle title="ModalTest" />
      <Button childlen="View Modal" colorType="sub" onClick={() => setIsViewModal(!isViewModal)} />
      <RenderModal>
        <ModalContainer>
          <ModalContent>エリア外クリックでモーダルを閉じる</ModalContent>
        </ModalContainer>
      </RenderModal>
    </>
  )
}

export default ModalTest
