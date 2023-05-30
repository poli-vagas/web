import React, { useCallback, useEffect } from 'react'
import { Goback, Spinner } from '~/components'
import useStore from '~/store'
import SendCode from './SendCode'
import SendEmail from './SendEmail'
import SendPassword from './SendPassword'
import * as S from './styles'

const Forgot: React.FC = () => {
  const { forgotStep, forgotLoading, clearForgot } = useStore((store) => ({
    forgotStep: store.forgotStep,
    forgotLoading: store.forgotLoading,
    clearForgot: store.clearForgot
  }))

  const Component = useCallback(() => {
    switch (forgotStep) {
      case 0:
        return <SendEmail />
      case 1:
        return <SendCode />
      case 2:
        return <SendPassword />
      default:
        return <SendEmail />
    }
  }, [forgotStep])

  useEffect(() => {
    return () => {
      clearForgot()
    }
  }, [clearForgot])

  return (
    <S.Container>
      <S.Left />
      <S.Right>
        <Goback path="/" handleClick={clearForgot} />
        {forgotLoading ? <Spinner /> : <Component />}
      </S.Right>
    </S.Container>
  )
}

export default Forgot
