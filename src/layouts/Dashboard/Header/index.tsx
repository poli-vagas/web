import React from 'react'
import { HeaderProps } from './types'
import * as S from './styles'
import Profile from '../Profile'

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {/* <Profile /> */}
    </S.Container>
  )
}

export default Header
