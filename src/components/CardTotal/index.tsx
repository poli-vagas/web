import React from 'react'
import Skeleton from 'react-loading-skeleton'

import * as S from './styles'
import { CardTotalProps } from './types'

const CardTotal: React.FC<CardTotalProps> = ({
  icon,
  text,
  total,
  loading
}) => {
  return (
    <S.Container>
      <S.IconBox>
        <S.Icon>{icon}</S.Icon>
      </S.IconBox>
      <S.Content>
        <S.Title>
          {!loading ? text : <Skeleton count={1} width={180} />}
        </S.Title>
        <S.Total>
          {!loading ? total : <Skeleton count={1} width={180} />}
        </S.Total>
      </S.Content>
    </S.Container>
  )
}

export default CardTotal
