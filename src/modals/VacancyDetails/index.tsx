import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Styles } from 'react-modal'
import { useNavigate, useParams } from 'react-router'
import { SiLinkedin } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { FcPhone } from 'react-icons/fc'

import LogoImg from '~/assets/images/logo.png'
import { Input, Modal, TextArea } from '~/components'
import { Sizes } from '~/components/Button/types'
import { VacancyTableResponse } from '~/services/vacancies/types'
import useStore from '~/store'
import * as S from './styles'
import { money } from '~/utils/money'
import { vacancy } from '~/constants'

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
  const vacancyDetails = allVacancies.jobs.find((item) => item.id === id)

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

        {vacancyDetails?.company.name && (
          <Input
            name="name"
            id="name"
            value={vacancyDetails?.company.name}
            marginVertical="1rem"
            disabled
            size={Sizes.SMALL}
            label="Nome da empresa"
          />
        )}

        {(vacancy.type(vacancyDetails?.type ?? '') ||
          vacancyDetails?.semester) && (
          <S.Row>
            {vacancyDetails?.type && (
              <Input
                name="type"
                id="type"
                value={vacancy.type(vacancyDetails?.type ?? '')}
                disabled
                marginVertical="1rem"
                size={Sizes.SMALL}
                label="Tipo"
              />
            )}

            {vacancyDetails?.semester && (
              <Input
                name="semester"
                id="semester"
                value={vacancyDetails?.semester ?? ''}
                disabled
                marginVertical="1rem"
                size={Sizes.SMALL}
                label="Semestre"
              />
            )}
          </S.Row>
        )}

        {vacancyDetails?.description && (
          <TextArea
            name="description"
            id="description"
            value={vacancyDetails?.description ?? ''}
            marginVertical="1rem"
            disabled
            label="Descrição"
          />
        )}

        {vacancyDetails?.requirements?.softSkills && (
          <TextArea
            name="softSkills"
            id="softSkills"
            value={vacancyDetails?.requirements?.softSkills ?? ''}
            disabled
            marginVertical="1rem"
            label="Soft Skills"
          />
        )}

        {vacancyDetails?.requirements?.hardSkills && (
          <TextArea
            name="hardSkills"
            id="hardSkills"
            value={vacancyDetails?.requirements.hardSkills ?? ''}
            disabled
            marginVertical="1rem"
            label="Hard skills"
          />
        )}

        {vacancy.benefits(vacancyDetails?.benefits) && (
          <TextArea
            name="benefits"
            id="benefits"
            value={vacancy.benefits(vacancyDetails?.benefits)}
            disabled
            marginVertical="1rem"
            label="Benefícios"
          />
        )}

        {(vacancyDetails?.limitDate || vacancyDetails?.graduationDate) && (
          <S.Row>
            {vacancyDetails?.limitDate && (
              <Input
                name="limitDate"
                id="limitDate"
                type="date"
                value={vacancyDetails?.limitDate?.substring(0, 10)}
                disabled
                marginVertical="1rem"
                size={Sizes.SMALL}
                label="Data limite"
              />
            )}

            {vacancyDetails?.graduationDate && (
              <Input
                name="graduationDate"
                id="graduationDate"
                type="date"
                value={vacancyDetails?.graduationDate?.substring(0, 10)}
                disabled
                marginVertical="1rem"
                size={Sizes.SMALL}
                label="Data graduação"
              />
            )}
          </S.Row>
        )}

        {(vacancyDetails?.courses?.length ?? 0) > 0 && (
          <Input
            name="courses"
            id="courses"
            value={vacancy.courses(vacancyDetails?.courses ?? [])}
            disabled
            marginVertical="1rem"
            size={Sizes.SMALL}
            label="Cursos"
          />
        )}

        {vacancyDetails?.area && (
          <Input
            name="area"
            id="area"
            value={vacancyDetails?.area}
            disabled
            marginVertical="1rem"
            size={Sizes.SMALL}
            label="Area"
          />
        )}

        {(vacancy.workplace(vacancyDetails?.workplace ?? '') ||
          vacancyDetails?.hoursPerDay ||
          vacancyDetails?.salary ||
          vacancy.englishLevel(
            vacancyDetails?.requirements.englishLevel ?? ''
          )) && (
          <S.Row>
            {vacancyDetails?.workplace && (
              <Input
                name="workplace"
                id="workplace"
                value={vacancy.workplace(vacancyDetails?.workplace ?? '')}
                disabled
                marginVertical="1rem"
                size={Sizes.SMALL}
                label="Espaço de trabalho"
              />
            )}

            {vacancyDetails?.hoursPerDay && (
              <Input
                name="hoursPerDay"
                id="hoursPerDay"
                value={vacancyDetails?.hoursPerDay ?? ''}
                disabled
                marginVertical="1rem"
                size={Sizes.SMALL}
                label="Horas por dia"
              />
            )}

            {vacancyDetails?.salary && (
              <Input
                name="salary"
                id="salary"
                type="email"
                value={`R$ ${money(vacancyDetails?.salary ?? 0)}`}
                disabled
                marginVertical="1rem"
                size={Sizes.SMALL}
                label="Salário"
              />
            )}

            {vacancy.englishLevel(
              vacancyDetails?.requirements.englishLevel ?? ''
            ) && (
              <Input
                name="englishLevel"
                id="englishLevel"
                value={vacancy.englishLevel(
                  vacancyDetails?.requirements.englishLevel ?? ''
                )}
                disabled
                marginVertical="1rem"
                size={Sizes.SMALL}
                label="Nível inglês"
              />
            )}
          </S.Row>
        )}

        {vacancyDetails?.createdTime && (
          <Input
            name="createdTime"
            id="createdTime"
            type="date"
            value={vacancyDetails?.createdTime.substring(0, 10)}
            disabled
            marginVertical="1rem"
            size={Sizes.SMALL}
            label="Data de cadastro"
          />
        )}

        {(vacancyDetails?.contact.linkedinUrl ||
          vacancyDetails?.contact.email ||
          vacancyDetails?.contact.phone ||
          vacancyDetails?.contact.url) && (
          <h3 style={{ marginTop: '2rem' }}>Contato</h3>
        )}

        {vacancyDetails?.contact.linkedinUrl && (
          <S.Clickable
            onClick={() =>
              window.open(vacancyDetails?.contact.linkedinUrl ?? '', '_blank')
            }
          >
            <SiLinkedin color="rgb(49, 73, 198)" size={20} />
            <S.ClickableText>Linkedin</S.ClickableText>
          </S.Clickable>
        )}

        {vacancyDetails?.contact.email && (
          <S.Clickable
            onClick={() =>
              window.open(`mailto:${vacancyDetails?.contact.email}`)
            }
          >
            <MdEmail color="rgb(236, 193, 0)" size={20} />
            <S.ClickableText>{vacancyDetails?.contact.email}</S.ClickableText>
          </S.Clickable>
        )}

        {vacancyDetails?.contact.phone && (
          <S.Clickable
            onClick={() => window.open(`tel:${vacancyDetails?.contact.phone}`)}
          >
            <FcPhone size={20} />
            <S.ClickableText>{vacancyDetails?.contact.phone}</S.ClickableText>
          </S.Clickable>
        )}

        {vacancyDetails?.contact.url && (
          <S.Link href={vacancyDetails?.contact.url ?? ''} target="_blank">
            {vacancyDetails?.contact.url}
          </S.Link>
        )}

        {vacancyDetails?.contact.url && vacancyDetails?.contact.externalId && (
          <S.SmallText>
            ID da vaga no site externo: {vacancyDetails?.contact.externalId}
          </S.SmallText>
        )}
      </S.Container>
    </Modal>
  )
}

export default VacancyDetails
