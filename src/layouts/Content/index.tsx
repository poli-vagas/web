import React from 'react'
import { ContentProps } from './types'
import * as S from './styles'
import { useNavigate } from 'react-router'
import { BsArrowLeft } from 'react-icons/bs'

const Content: React.FC<ContentProps> = ({ body, header, goBack }) => {
  const navigate = useNavigate()
  return (
    <S.Container>
      {goBack && (
        <S.Back onClick={() => navigate(-1)}>
          <BsArrowLeft /> Voltar
        </S.Back>
      )}
      {header && <S.Header>{header}</S.Header>}
      <S.Body>{body}</S.Body>
    </S.Container>
  )
}

export default Content
