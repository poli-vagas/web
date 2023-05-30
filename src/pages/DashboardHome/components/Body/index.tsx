import React from 'react'
import * as S from './styles'
import OpportunitiesBulletinImg from '~/assets/images/opportunities-bulletin.png'

const Body: React.FC = () => {
  return (
    <S.BodyContainer>
      <S.Image src={OpportunitiesBulletinImg} />
    </S.BodyContainer>
  )
}

export default Body
