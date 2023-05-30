import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import { useTheme } from 'styled-components'
import * as S from './styles'

const Spinner: React.FC = () => {
  const { colors } = useTheme()
  return (
    <S.Container>
      <FaSpinner color={colors.primary} size={50} />
    </S.Container>
  )
}

export default Spinner
