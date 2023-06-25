import React from 'react'
import * as S from './styles'
import OpportunitiesBulletinImg from '~/assets/images/opportunities-bulletin.png'

const Body: React.FC = () => {
  return (
    <S.BodyContainer>
      <S.BodyText>
        Bem vindo ao Poli Vagas, a plataforma de vagas de estágios da Escola
        politécnica.
      </S.BodyText>
      <S.Image src={OpportunitiesBulletinImg} />
    </S.BodyContainer>
  )
}

export default Body
