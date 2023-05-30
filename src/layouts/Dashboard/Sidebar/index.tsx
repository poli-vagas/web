import React from 'react'
import * as uuid from 'uuid'
import LogoImg from '~/assets/images/logo.png'
import { CanView } from '~/components'
import useStore from '~/store'
import * as S from './styles'
import { SidebarProps } from './types'

const Sidebar: React.FC<SidebarProps> = ({
  changePath,
  currentPath,
  options
}) => {
  const authenticationData = useStore((state) => state.authenticationData)
  return (
    <S.Container>
      <S.Image src={LogoImg} />

      <S.Menu>
        {options.map((option) => (
          <CanView
            key={uuid.v4()}
            role={authenticationData.user.type}
            access={option.value || 'general'}
          >
            <S.MenuItem
              onClick={() => changePath(option.value)}
              active={option.value === currentPath}
            >
              {option.icon} {option.name}
            </S.MenuItem>
          </CanView>
        ))}
      </S.Menu>
    </S.Container>
  )
}

export default Sidebar
