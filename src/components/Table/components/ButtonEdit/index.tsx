import React, { ButtonHTMLAttributes } from 'react'
import { FiEdit } from 'react-icons/fi'
import * as S from './styles'

const ButtonEdit: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return (
    <S.Container {...props}>
      <FiEdit size={18} />
    </S.Container>
  )
}

export default ButtonEdit
