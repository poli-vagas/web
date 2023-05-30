import React, { ButtonHTMLAttributes } from 'react'
import { BiCheckSquare } from 'react-icons/bi'
import { FiSend } from 'react-icons/fi'
import * as S from './styles'

interface ButtonBlockProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status: boolean
}
const ButtonBlock: React.FC<ButtonBlockProps> = ({ status, ...props }) => {
  return (
    <S.Container {...props} status={status}>
      {status ? <FiSend size={18} /> : <BiCheckSquare size={18} />}
    </S.Container>
  )
}

export default ButtonBlock
