import React, { ButtonHTMLAttributes } from 'react'
import { FiTrash } from 'react-icons/fi'
import * as S from './styles'

const ButtonDelete: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return (
    <S.Container {...props}>
      <FiTrash size={18} />
    </S.Container>
  )
}

export default ButtonDelete
