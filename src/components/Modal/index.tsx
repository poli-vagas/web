import { rgba } from 'polished'
import React from 'react'
import ReactModal, { Styles } from 'react-modal'
import { ModalProps } from './types'

const fixedStyles: Styles = {
  overlay: {
    zIndex: 9,
    background: rgba(255, 255, 255, 0.7)
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: 20,
    padding: 0,
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  }
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  onAfterOpen,
  customStyled,
  children
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      onAfterClose={onAfterOpen}
      ariaHideApp={false}
      style={customStyled || fixedStyles}
    >
      {children}
    </ReactModal>
  )
}

export default React.memo(Modal)
