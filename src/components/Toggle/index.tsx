import React from 'react'
import Toggle, { ToggleProps } from 'react-toggle'
import * as S from './styles'

interface ToggleComponentProps extends ToggleProps {
  marginHorizontal?: string
  marginVertical?: string
  label?: string
}
const ToggleComponent: React.FC<ToggleComponentProps> = (props) => {
  return (
    <S.Container
      marginHorizontal={props.marginHorizontal}
      marginVertical={props.marginVertical}
    >
      {props?.label && <S.Label>{props.label}</S.Label>}
      <S.Input>
        <Toggle {...props} />
        <span>{props.checked ? 'Ativo' : 'Desativado'}</span>
      </S.Input>
    </S.Container>
  )
}

export default ToggleComponent
