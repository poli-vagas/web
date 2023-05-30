import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router'
import * as Yup from 'yup'
import { Button, Input } from '~/components'
import useStore from '~/store'
import * as S from './styles'

const Login: React.FC = () => {
  const { login } = useStore.getState()
  const navigate = useNavigate()

  const INITIAL_VALUES = {
    email: '',
    password: ''
  }

  const validation = Yup.object().shape({
    email: Yup.string()
      .email('E-mail inválido.')
      .required('Campo obrigatório!'),
    password: Yup.string().required('Campo obrigatório!')
  })

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: validation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) =>
      login(values, () => navigate('/dash', { replace: true }))
  })

  return (
    <S.Container>
      <S.Left>
        <S.Form onSubmit={handleSubmit}>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Seu e-mail"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
            width="100%"
          />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Sua senha"
            marginVertical="2rem"
            value={values.password}
            error={errors.password}
            onChange={handleChange}
          />
          <S.ForgotLink to="/forgot">Esqueceu a senha?</S.ForgotLink>
          <Button type="submit">Entrar</Button>
        </S.Form>
      </S.Left>
      <S.Right />
    </S.Container>
  )
}

export default Login
