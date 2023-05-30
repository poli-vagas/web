import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Button, Input } from '~/components'
import useStore from '~/store'
import * as S from './styles'

const SendPassword: React.FC = () => {
  const navigate = useNavigate()
  const { forgotData, resetPassword } = useStore((store) => ({
    forgotData: store.forgotData,
    resetPassword: store.resetPassword
  }))

  const validation = Yup.object().shape({
    password: Yup.string().required('Campo obrigatório!'),
    password_confirm: Yup.string()
      .test(
        'is-invalid',
        'As senhas não conferem',
        (value, ctx) => ctx.parent.password === value
      )
      .required('Campo obrigatório!')
  })

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      password: '',
      password_confirm: ''
    },
    validationSchema: validation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) =>
      resetPassword(
        {
          code: forgotData.code,
          email: forgotData.email,
          password: values.password
        },
        () => navigate('/')
      )
  })

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Crie uma nova senha"
          value={values.password}
          error={errors.password}
          onChange={handleChange}
        />
        <Input
          id="password_confirm"
          name="password_confirm"
          type="password"
          placeholder="Repetir senha"
          marginVertical="2rem"
          value={values.password_confirm}
          error={errors.password_confirm}
          onChange={handleChange}
        />
        <Button type="submit" marginVertical="4rem">
          Atualizar senha
        </Button>
      </form>
    </S.Container>
  )
}

export default SendPassword
