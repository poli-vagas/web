import { useFormik } from 'formik'
import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import { useTheme } from 'styled-components'
import * as Yup from 'yup'
import { Button, ValidationCode } from '~/components'
import useStore from '~/store'
import * as S from './styles'

const SendCode: React.FC = () => {
  const { colors } = useTheme()
  const { validateCodeFromEmail, forgotData } = useStore((store) => ({
    validateCodeFromEmail: store.validateCodeFromEmail,
    forgotData: store.forgotData
  }))
  const validation = Yup.object().shape({
    code: Yup.string().min(4, 'Código Inválido.').required('Campo obrigatório!')
  })

  const { errors, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      code: ''
    },
    validationSchema: validation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) =>
      validateCodeFromEmail({ code: values.code, email: forgotData.email })
  })

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <BsCheckCircleFill color={colors.primary} size={60} />
        <S.Title>E-mail enviado com sucesso</S.Title>
        <S.Subtitle>
          Agora, passa no teu e-mail que tem um código para você lá
        </S.Subtitle>
        <ValidationCode setCode={(code) => setFieldValue('code', code)} />
        {errors?.code && <S.CodeError>{errors?.code}</S.CodeError>}
        <Button type="submit" marginVertical="5.4rem">
          Validar
        </Button>
      </form>
    </S.Container>
  )
}

export default SendCode
