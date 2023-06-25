import React from 'react'
import * as S from './styles'
import OpportunitiesBulletinImg from '~/assets/images/opportunities-bulletin.png'

const Body: React.FC = () => {
  return (
    <S.BodyContainer>
      <S.BodyText>
        Bem vindo ao Poli Vagas, a plataforma de vagas de emprego e estágio da
        Escola Politécnica.
      </S.BodyText>
      <S.SmallText>As vagas são atualizadas toda sexta-feira!</S.SmallText>
      <S.Image src={OpportunitiesBulletinImg} />
    </S.BodyContainer>
  )
}

export default Body
