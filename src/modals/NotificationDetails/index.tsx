import { useFormik } from 'formik'
import React, { useCallback } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import * as Yup from 'yup'
import { useNavigate, useParams } from 'react-router'
import { Button, Input, Modal } from '~/components'
import * as S from './styles'
import useStore from '~/store'

const validation = Yup.object().shape({
  email: Yup.string().required('Campo obrigatório')
})
const INITIAL_VALUES = {
  email: ''
}

const SendEmail: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<'id'>()

  const { patchSendNotification, saveFilter, filter } = useStore((store) => ({
    patchSendNotification: store.patchSendNotification,
    saveFilter: store.saveFilter,
    filter: store.filter
  }))

  const onDismiss = useCallback(() => {
    navigate('/dash/vacancies', { replace: true })
    saveFilter({})
  }, [saveFilter, navigate])

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: validation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      const { email } = values
      patchSendNotification({ email, filter })
      onDismiss()
    }
  })

  return (
    <Modal isOpen={true} closeModal={() => onDismiss()}>
      <S.Container>
        <S.Header>
          <h2>Cadastrar e-mail</h2>
          <S.ButtonClose onClick={() => onDismiss()}>
            <AiOutlineCloseCircle size={18} /> Fechar
          </S.ButtonClose>
        </S.Header>
        <S.Body>
          <S.WrapperInput>
            <Input
              label="E-mail"
              placeholder="Ex.: meuemail@email.com.br"
              name="email"
              id="email"
              value={values.email}
              error={errors.email}
              disabled={!!id}
              onChange={handleChange}
            />
          </S.WrapperInput>
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

export default SendEmail
