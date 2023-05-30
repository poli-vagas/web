import { useFormik } from 'formik'
import React, { useCallback, useEffect } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import * as Yup from 'yup'
import { useNavigate, useParams } from 'react-router'
import { Modal, Select, TextArea } from '~/components'
import * as S from './styles'
import { date, notification } from '~/constants'
import useStore from '~/store'

const validation = Yup.object().shape({
  company: Yup.string().required('Campo obrigatório'),
  message: Yup.string()
    .max(100, 'Texto muito grande.')
    .required('Campo obrigatório'),
  month: Yup.string().when('company', {
    is: '3',
    then: Yup.string().required('Campo obrigatório'),
    otherwise: Yup.string().optional().nullable()
  }),
  year: Yup.string().when('company', {
    is: '3',
    then: Yup.string().required('Campo obrigatório'),
    otherwise: Yup.string().optional().nullable()
  })
})
const INITIAL_VALUES = {
  company: 0,
  month: '',
  year: '',
  message: ''
}

const NotificationDetails: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<'id'>()

  const {
    getNotificationDetails,
    clearNotificationDetails,
    notificationDetails
  } = useStore((store) => ({
    getNotificationDetails: store.getNotificationDetails,
    clearNotificationDetails: store.clearNotificationDetails,
    notificationDetails: store.notificationDetails
  }))

  const { values, errors, handleChange, setValues, resetForm } = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: validation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: () => new Promise(() => null)
  })

  const onDismiss = useCallback(() => {
    navigate('/dash/notification', { replace: true })
    clearNotificationDetails()
  }, [clearNotificationDetails, navigate])

  useEffect(() => {
    if (id) {
      getNotificationDetails({ id: Number(id) })
    } else {
      clearNotificationDetails()
      resetForm()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    if (notificationDetails) {
      setValues({
        company: Number(notificationDetails?.company),
        message: notificationDetails.message,
        month: notificationDetails?.month?.toString() || '',
        year: notificationDetails?.year?.toString() || ''
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notificationDetails])

  return (
    <Modal isOpen={true} closeModal={() => onDismiss()}>
      <S.Container>
        <S.Header>
          <h2>Notificações</h2>
          <S.ButtonClose onClick={() => onDismiss()}>
            <AiOutlineCloseCircle size={18} /> Fechar
          </S.ButtonClose>
        </S.Header>
        <S.Body>
          <S.Row>
            <Select
              label="Empresa"
              name="company"
              id="company"
              value={values.company}
              error={errors.company}
              onChange={handleChange}
              disabled={!!id}
              options={notification.COMPANY_LIST}
            />

            {values.company.toString() === '3' && (
              <>
                <Select
                  label="Mês"
                  name="month"
                  id="month"
                  marginHorizontal="2rem"
                  value={values.month.toString()}
                  error={errors.month}
                  onChange={handleChange}
                  disabled={!!id}
                  options={date.MONTH_LIST}
                />

                <Select
                  label="Ano"
                  name="year"
                  id="year"
                  value={values.year.toString()}
                  error={errors.year}
                  onChange={handleChange}
                  disabled={!!id}
                  options={date.YEAR_LIST}
                />
              </>
            )}
          </S.Row>

          <TextArea
            label="Notificação"
            placeholder="Escreva aqui sua notificação..."
            name="message"
            id="message"
            value={values.message}
            error={errors.message}
            disabled={!!id}
            onChange={handleChange}
            rows={4}
          />
        </S.Body>
      </S.Container>
    </Modal>
  )
}

export default NotificationDetails
