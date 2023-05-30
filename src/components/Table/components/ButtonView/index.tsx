import React, { ButtonHTMLAttributes } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import * as S from './styles'

const ButtonView: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return (
    <S.Container {...props}>
      <AiOutlineEye size={18} />
    </S.Container>
  )
}

export default ButtonView
