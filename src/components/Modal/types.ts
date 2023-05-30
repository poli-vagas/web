import React from 'react'
import { Styles } from 'react-modal'
export interface ModalProps {
  isOpen: boolean
  closeModal(): void
  onAfterOpen?: () => void
  children: React.ReactNode
  customStyled?: Styles
}
