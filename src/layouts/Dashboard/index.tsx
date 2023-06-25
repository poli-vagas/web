import React, { useCallback, useEffect, useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import * as S from './styles'
import {
  IoBriefcaseOutline,
  IoHomeOutline,
  IoNotificationsOutline,
  IoSettingsOutline
} from 'react-icons/io5'
import { APP_ACCESS } from '~/constants/access'
import useStore from '~/store'

const Dashboard: React.FC = () => {
  const authenticationData = useStore.getState()?.authenticationData
  const { pathname } = useLocation()
  const getRouteByPathName = useCallback(() => {
    return pathname?.replace(/^(\/dash(\/)?)/gi, '').replace(/\/.*/gi, '') || ''
  }, [pathname])
  const [currentPath, setCurrentPath] = useState(() => getRouteByPathName())

  const navigate = useNavigate()

  const menuOptions = [
    { value: '', name: 'Início', icon: <IoHomeOutline /> },
    { value: 'vacancies', name: 'Vagas', icon: <IoBriefcaseOutline /> }
    // {
    //   value: 'notification',
    //   name: 'Notificações',
    //   icon: <IoNotificationsOutline />
    // },
    // {
    //   value: 'configuration',
    //   name: 'Configurações',
    //   icon: <IoSettingsOutline />
    // }
  ]

  const handleChangePage = useCallback(
    (value: string) => {
      setCurrentPath(value)
      navigate(`/dash/${value}`, { replace: true })
    },
    [navigate]
  )

  const userHasRequiredRole = useCallback(() => {
    if (authenticationData.user.type) {
      return Boolean(
        APP_ACCESS[authenticationData?.user?.type]?.includes(
          currentPath || 'general'
        )
      )
    }
    return false
  }, [authenticationData.user.type, currentPath])

  useEffect(() => {
    if (!userHasRequiredRole()) {
      const firstPageWithAccess =
        APP_ACCESS[authenticationData?.user?.type][0] !== 'general'
          ? APP_ACCESS[authenticationData?.user?.type][0]
          : ''
      navigate(`/dash/${firstPageWithAccess}`, { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userHasRequiredRole])

  useEffect(() => {
    setCurrentPath(getRouteByPathName())
  }, [getRouteByPathName, pathname])

  return (
    <S.Container>
      <Header
        title={
          menuOptions.find((item) => item.value === currentPath)?.name || ''
        }
      />
      <Sidebar
        options={menuOptions}
        currentPath={currentPath}
        changePath={handleChangePage}
      />
      <S.Content>
        <Outlet />
      </S.Content>
    </S.Container>
  )
}

export default Dashboard
