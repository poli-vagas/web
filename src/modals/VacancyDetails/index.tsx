import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Styles } from 'react-modal'
import { useNavigate, useParams } from 'react-router'
import LogoImg from '~/assets/images/logo.png'
import { Input, Modal } from '~/components'
import { Sizes } from '~/components/Button/types'
import { VacancyTableResponse } from '~/services/vacancies/types'
import useStore from '~/store'
import * as S from './styles'
import { money } from '~/utils/money'
const styles: Styles = {
  overlay: {
    zIndex: 9,
    background: 'rgba(255, 255, 255, 0.6)',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  content: {
    inset: 'auto',
    top: 0,
    bottom: 0,
    right: 0,
    height: '100%',
    border: 'none',
    borderRadius: '30px 0 0 30px',
    padding: 0,
    boxShadow: '0 14px 20px rgba(0,0,0,0.18), 0 10px 10px rgba(0,0,0,0.16)'
  }
}

const VacancyDetails: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<'id'>()
  const allVacancies = useStore(
    (store) => (store.allVacancies as unknown) as VacancyTableResponse
  )
  const vacancyDetails = allVacancies.rows.find((item) => item.id === id)

  return (
    <Modal isOpen={true} closeModal={() => null} customStyled={styles}>
      <S.Container>
        <S.Header>
          <h2>{vacancyDetails?.company.name}</h2>
          <S.ButtonClose onClick={() => navigate(-1)}>
            <AiOutlineCloseCircle size={18} /> Fechar
          </S.ButtonClose>
        </S.Header>
        <S.Image src={LogoImg} />

        <Input
          name="name"
          id="name"
          value={vacancyDetails?.company.name}
          marginVertical="1rem"
          disabled
          size={Sizes.SMALL}
          label="Nome"
        />
        <S.Row>
          <Input
            name="createdTime"
            id="createdTime"
            type="date"
            value={vacancyDetails?.createdTime.substring(0, 10)}
            disabled
            size={Sizes.SMALL}
            label="Data de cadastro"
          />

          <Input
            name="type"
            id="type"
            value={vacancyDetails?.type}
            disabled
            marginHorizontal="1rem"
            size={Sizes.SMALL}
            label="Tipo"
          />
        </S.Row>

        <Input
          name="salary"
          id="salary"
          type="email"
          marginVertical="1rem"
          value={`R$ ${money(vacancyDetails?.salary ?? 0)}`}
          disabled
          size={Sizes.SMALL}
          label="Salário"
        />

        <h3 style={{ marginTop: '2rem' }}>Localização</h3>

        <S.Row>
          <Input
            name="country"
            id="country"
            value={vacancyDetails?.company.name}
            disabled
            marginVertical="1rem"
            size={Sizes.SMALL}
            label="Pais"
          />

          <Input
            name="state"
            id="state"
            value={vacancyDetails?.company.name}
            disabled
            marginHorizontal="1rem"
            marginVertical="1rem"
            size={Sizes.SMALL}
            label="Estado"
          />
        </S.Row>

        <Input
          name="city"
          id="city"
          value={vacancyDetails?.company.name}
          disabled
          size={Sizes.SMALL}
          label="Cidade"
        />
      </S.Container>
    </Modal>
  )
}

export default VacancyDetails
