import { useFormik } from 'formik'
import React, { useCallback, useEffect } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import * as Yup from 'yup'
import { useNavigate, useParams } from 'react-router'
import { Button, Input, Modal, Select } from '~/components'
import * as S from './styles'
import useStore from '~/store'
import { administrators } from '~/constants'
import { AccessType } from '~/services/auth/types'

const validation = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string().required('Campo obrigatório'),
  status: Yup.boolean(),
  type: Yup.string().required('Campo obrigatório')
})
const INITIAL_VALUES = {
  name: '',
  email: '',
  status: true,
  type: AccessType.admin
}

const AdministratorDetails: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<'id'>()

  const {
    createAdministrator,
    getAdministratorDetails,
    clearAdministratorDetails,
    administratorDetails,
    patchAdministrator
  } = useStore((store) => ({
    createAdministrator: store.createAdministrator,
    patchAdministrator: store.patchAdministrator,
    getAdministratorDetails: store.getAdministratorDetails,
    clearAdministratorDetails: store.clearAdministratorDetails,
    administratorDetails: store.administratorDetails
  }))

  const onDismiss = useCallback(() => {
    navigate('/dash/administrators', { replace: true })
    clearAdministratorDetails()
  }, [clearAdministratorDetails, navigate])

  const {
    values,
    errors,
    setFieldValue,
    handleChange,
    handleSubmit,
    setValues,
    resetForm
  } = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: validation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      if (id) {
        patchAdministrator({ id: Number(id), ...values })
      } else {
        createAdministrator(values)
      }
      onDismiss()
    }
  })

  useEffect(() => {
    if (id) {
      getAdministratorDetails({
        id: Number(id)
      })
    } else {
      clearAdministratorDetails()
      resetForm()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    if (administratorDetails) {
      setValues({
        name: administratorDetails.name.toString(),
        email: administratorDetails.email.toString(),
        type: administratorDetails.type,
        status: administratorDetails.status
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [administratorDetails])

  return (
    <Modal isOpen={true} closeModal={() => onDismiss()}>
      <S.Container>
        <S.Header>
          <h2>{id ? 'Editar colaborador' : 'Adicionar colaborador'}</h2>
          <S.ButtonClose onClick={() => onDismiss()}>
            <AiOutlineCloseCircle size={18} /> Fechar
          </S.ButtonClose>
        </S.Header>
        <S.Body>
          <S.Row>
            <Input
              label="Nome"
              name="name"
              id="name"
              value={values.name}
              error={errors.name}
              onChange={handleChange}
            />
            <Input
              label="E-mail"
              placeholder="Ex.: meuemail@email.com.br"
              name="email"
              id="email"
              marginHorizontal="2rem"
              value={values.email}
              error={errors.email}
              disabled={!!id}
              onChange={handleChange}
            />
          </S.Row>

          <S.Row>
            <Select
              id="status"
              name="status"
              label="Status"
              value={values.status ? '1' : '0'}
              error={errors.status}
              onChange={(e) =>
                setFieldValue('status', Boolean(e.currentTarget.value))
              }
              options={[
                { value: 1, label: 'Ativo' },
                { value: 0, label: 'Desativado' }
              ]}
            />

            <Select
              id="type"
              name="type"
              label="Tipo de usuário"
              marginHorizontal="2rem"
              value={values.type}
              error={errors.type}
              onChange={handleChange}
              options={administrators.ADMINISTRATOR_TYPES_LIST}
            />
          </S.Row>
        </S.Body>

        <S.Footer>
          <Button
            outline
            width="18.8rem"
            marginHorizontal="4rem"
            onClick={() => onDismiss()}
          >
            Cancelar
          </Button>
          <Button width="18.8rem" onClick={() => handleSubmit()}>
            Salvar
          </Button>
        </S.Footer>
      </S.Container>
    </Modal>
  )
}

export default AdministratorDetails
