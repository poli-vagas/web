import { format } from 'date-fns'
import { useFormikContext } from 'formik'
import React, { useCallback, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Table } from '~/components'
import { notification } from '~/constants'
import { NotificationTableItem } from '~/services/notifications/types'
import useStore from '~/store'
import { INITIAL_PARAMS } from '../types'

import * as S from './styles'

const Body: React.FC = () => {
  const {
    allNotifications,
    allNotificationsLoading,
    patchSendNotification
  } = useStore((state) => ({
    allNotifications: state.allNotifications,
    allNotificationsLoading: state.allNotificationsLoading,
    patchSendNotification: state.patchSendNotification
  }))

  const navigate = useNavigate()
  const location = useLocation()
  const { values, setFieldValue, handleSubmit } = useFormikContext<
    typeof INITIAL_PARAMS
  >()

  const handleChangePage = useCallback(
    (page: number) => {
      setFieldValue('page', page)
      handleSubmit()
    },
    [handleSubmit, setFieldValue]
  )

  const handleView = useCallback(
    (id: number) => {
      navigate(`view/${id}`, {
        replace: true,
        state: { backgroundLocation: location }
      })
    },
    [location, navigate]
  )

  const handleSendNotification = useCallback(
    (id: number) => {
      patchSendNotification({ id: id, isSent: true })
    },
    [patchSendNotification]
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Data',
        accessor: 'createdAt',
        align: 'left',
        width: '30rem'
      },
      {
        Header: 'Notificação',
        accessor: 'message',
        align: 'left',
        width: '30rem'
      },
      {
        Header: 'Empresa',
        accessor: 'company',
        align: 'left',
        width: '30rem'
      },
      {
        Header: 'Ações',
        accessor: 'actions',
        type: 'actions',
        align: 'center',
        width: '30rem'
      }
    ],
    []
  )

  const handleReturnShortAudience = useCallback((value: number) => {
    const label = notification.COMPANY_LIST.find((type) => type.value === value)
      ?.label

    if (label) {
      const shortLabel = label?.match(/[^(]*/gi)
      return shortLabel ? shortLabel[0].trim() : ''
    }
    return ''
  }, [])

  return (
    <S.Container>
      <Table
        columns={columns}
        count={allNotifications.count}
        loading={allNotificationsLoading}
        page={values.page}
        data={
          allNotifications?.rows?.map((item: NotificationTableItem) => ({
            ...item,
            createdAt: format(new Date(item.createdAt), 'dd/MM/yyyy'),
            audience: handleReturnShortAudience(
              Number(item.audience)
            ) as string,
            status: item.isSent
          })) || []
        }
        onGetNextPage={handleChangePage}
        actions={{
          view: handleView,
          sendNotification: handleSendNotification
        }}
      />
    </S.Container>
  )
}

export default Body
