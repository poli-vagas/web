import { useFormikContext } from 'formik'
import React, { useCallback, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useTheme } from 'styled-components'
import Swal from 'sweetalert2'
import { Table } from '~/components'
import { administrators } from '~/constants'
import { AdministratorTableItem } from '~/services/administrator/types'
import useStore from '~/store'
import { INITIAL_PARAMS } from '../types'

import * as S from './styles'

const Body: React.FC = () => {
  const {
    allAdministrators,
    allAdministratorsLoading,
    deleteAdministrator
  } = useStore((state) => ({
    allAdministrators: state.allAdministrators,
    allAdministratorsLoading: state.allAdministratorsLoading,
    deleteAdministrator: state.deleteAdministrator
  }))
  const { colors } = useTheme()
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

  const handleEdit = useCallback(
    (id: number) => {
      navigate(`/dash/administrators/edit/${id}`, {
        replace: true,
        state: { backgroundLocation: location }
      })
    },
    [location, navigate]
  )

  const handleDelete = useCallback(
    (id: number) => {
      Swal.fire({
        title: 'Você tem certeza que deseja excluir?',
        text: 'Não é possível reverter esta ação.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: colors.green,
        cancelButtonColor: colors.primary,
        confirmButtonText: 'Excluir!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          deleteAdministrator({
            id: id
          })
        }
      })
    },
    [colors.green, colors.primary, deleteAdministrator]
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Nome',
        accessor: 'name',
        align: 'left',
        width: '30rem'
      },
      {
        Header: 'E-mail',
        accessor: 'email',
        align: 'left',
        width: '30rem'
      },
      {
        Header: 'Type',
        accessor: 'type',
        align: 'left',
        width: '30rem'
      },
      {
        Header: 'Status',
        accessor: 'status',
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

  return (
    <S.Container>
      <Table
        columns={columns}
        count={allAdministrators.count}
        loading={allAdministratorsLoading}
        page={values.page}
        data={
          allAdministrators?.rows?.map((item: AdministratorTableItem) => ({
            ...item,
            status: item.status ? 'Ativo' : 'Desativado',
            type: administrators.ADMINISTRATOR_TYPES_LIST.find(
              (type) => type.value === item.type
            )?.label
          })) || []
        }
        onGetNextPage={handleChangePage}
        actions={{
          edit: handleEdit,
          delete: handleDelete
        }}
      />
    </S.Container>
  )
}

export default Body
