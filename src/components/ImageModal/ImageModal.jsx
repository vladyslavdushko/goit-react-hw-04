import Modal from 'react-modal'
const ImageModal = ({ afterOpenModal, closeModal, src, alt, isOpen}) => {

  Modal.setAppElement('#root');
  return (
    <Modal
    isOpen={isOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    contentLabel="Example Modal"
  >
    <img src={src} alt={alt} />
  </Modal>
  
  )
}

export default ImageModal