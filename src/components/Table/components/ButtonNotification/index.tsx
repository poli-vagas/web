import React, { ButtonHTMLAttributes } from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import * as S from './styles'

const ButtonNotification: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return (
    <S.Container {...props}>
      <IoMdNotificationsOutline size={18} />
    </S.Container>
  )
}

export default ButtonNotification
