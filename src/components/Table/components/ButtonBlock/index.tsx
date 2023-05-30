import React, { ButtonHTMLAttributes } from 'react'
import { BiBlock, BiCheckSquare } from 'react-icons/bi'
import * as S from './styles'

interface ButtonBlockProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status: boolean
}
const ButtonBlock: React.FC<ButtonBlockProps> = ({ status, ...props }) => {
  return (
    <S.Container {...props} status={status}>
      {status ? <BiCheckSquare size={18} /> : <BiBlock size={18} />}
    </S.Container>
  )
}

export default ButtonBlock
