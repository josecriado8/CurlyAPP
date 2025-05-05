import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <>
      <button
        className="modal-close-x-outer"
        onClick={onClose}
        aria-label="Cerrar modal"
        tabIndex={0}
      >
        ×
      </button>
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <nav className="modal-navbar">
            <span className="modal-navbar-title">CurlyAPP</span>
          </nav>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;