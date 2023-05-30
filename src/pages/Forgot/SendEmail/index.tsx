import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Input, Button } from '~/components'
import useStore from '~/store'
import * as S from './styles'

const SendEmail: React.FC = () => {
  const { sendCodeToEmail } = useStore.getState()
  const validation = Yup.object().shape({
    email: Yup.string().email('E-mail inválido!').required('Campo obrigatório!')
  })
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: validation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => sendCodeToEmail(values)
  })
  return (
    <S.Container>
      <S.Title>Esqueci minha senha</S.Title>
      <S.Subtitle>Por favor, insira seu e-mail de acesso</S.Subtitle>

      <form onSubmit={handleSubmit}>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Seu e-mail"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
          marginVertical="3rem"
        />

        <Button type="submit">Recuperar senha</Button>
      </form>
    </S.Container>
  )
}

export default SendEmail
