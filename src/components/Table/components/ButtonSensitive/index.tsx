import React, { ButtonHTMLAttributes } from 'react'
import { AiOutlineWarning } from 'react-icons/ai'
import * as S from './styles'

interface ButtonSensitiveProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status: boolean
}
const ButtonSensitive: React.FC<ButtonSensitiveProps> = ({
  status,
  ...props
}) => {
  return (
    <S.Container {...props} status={status}>
      <AiOutlineWarning size={18} />
    </S.Container>
  )
}

export default ButtonSensitive
