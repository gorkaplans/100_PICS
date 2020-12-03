import './Modal.scss';

const Modal = ({ open, onClose, children }) => {
  return (
    <div className={`modal-wrapper ${open ? 'is-open' : ''}`}>
      <div className="modal-bg" onClick={onClose} />
      <div className="modal-content">
        {children}
      </div>
    </div>
  )
}
 
export default Modal;