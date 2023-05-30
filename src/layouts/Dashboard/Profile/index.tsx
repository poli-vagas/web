import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { IoLogOutOutline } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router'
import useComponentVisible from '~/hooks/useComponentVisible'
import useStore from '~/store'
import * as S from './styles'
import LogoImg from '~/assets/images/logo.png'

const Profile: React.FC = () => {
  const authenticationData = useStore((store) => store.authenticationData)
  const { ref, isComponentVisible } = useComponentVisible(true)
  const [menuOptions, setMenuOptions] = useState(false)
  const logout = useStore.getState().logout
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = useCallback(() => {
    logout()
    navigate('/', { replace: true })
  }, [logout, navigate])

  const handleCloseOptions = useCallback(() => {
    setMenuOptions(false)
  }, [])

  const handleOpenOptions = useCallback(() => {
    setMenuOptions(true)
  }, [])

  const handleRedirect = useCallback(
    (path: string) => {
      handleCloseOptions()
      navigate(path, {
        replace: true,
        state: { backgroundLocation: location }
      })
    },
    [handleCloseOptions, location, navigate]
  )

  useEffect(() => {
    if (!isComponentVisible) {
      handleCloseOptions()
    }
  }, [handleCloseOptions, isComponentVisible])

  return (
    <S.Container ref={ref}>
      <S.Image src={authenticationData?.user?.profileImage || LogoImg} />
      <S.Content onClick={() => handleOpenOptions()}>
        <S.Name>{authenticationData?.user?.name}</S.Name>

        <AiOutlineCaretDown size={14} />
      </S.Content>

      <S.Divider />

      <S.ButtonExit onClick={handleLogout}>
        <IoLogOutOutline />
      </S.ButtonExit>

      <S.ProfileOptions open={menuOptions}>
        <S.Option
          onClick={() =>
            handleRedirect(`administrators/edit/${authenticationData.user.id}`)
          }
        >
          Meu Perfil
        </S.Option>
        <S.Option onClick={() => handleRedirect('configuration')}>
          Configurações
        </S.Option>
      </S.ProfileOptions>
    </S.Container>
  )
}

export default Profile
