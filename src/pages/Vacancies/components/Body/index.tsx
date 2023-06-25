import React, { useCallback, useMemo } from 'react'
import * as uuid from 'uuid'
import useStore from '~/store'
import { CardTotal } from '~/components'
import * as S from './styles'
import { Table } from '~/components'
import { useFormikContext } from 'formik'
import { INITIAL_PARAMS } from '../../types'
import { VacancyTableRow } from '~/services/vacancies/types'
import { useLocation, useNavigate } from 'react-router'
import { format } from 'date-fns'
import { IoBriefcase, IoBriefcaseOutline } from 'react-icons/io5'
import { vacancy } from '~/constants'

const Body: React.FC = () => {
  const { allVacancies, allVacanciesLoading } = useStore((store) => ({
    allVacancies: store.allVacancies,
    allVacanciesLoading: store.allVacanciesLoading
  }))
  const location = useLocation()
  const navigate = useNavigate()
  const { values, setFieldValue, handleSubmit } = useFormikContext<
    typeof INITIAL_PARAMS
  >()

  const handleChangePage = useCallback(
    (page: number) => {
      setFieldValue('page', page)
      handleSubmit()
    },
    [handleSubmit, setFieldValue]
  )

  // const handleFindVacancyById = useCallback(
  //   (id: string): VacancyTableRow | undefined => {
  //     return allVacancies.jobs.find((item: VacancyTableRow) => item.id === id)
  //   },
  //   [allVacancies.jobs]
  // )

  const handleViewVacancy = useCallback(
    (id: number) => {
      navigate(`${id}`, { state: { backgroundLocation: location } })
    },
    [location, navigate]
  )

  // const handleSelect = useCallback(
  //   (id: string) => {
  //     const vacancy = handleFindVacancyById(id)
  //     if (vacancy) {
  //       console.log('select vacancy id: ', id)
  //     }
  //   },
  //   [handleFindVacancyById]
  // )

  const vacancyTotalCards = useMemo(() => {
    return [
      {
        id: uuid.v4(),
        icon: <IoBriefcaseOutline />,
        text: 'Total de vagas',
        total: allVacancies.total
      },
      {
        id: uuid.v4(),
        icon: <IoBriefcase />,
        text: 'Vagas filtradas',
        total: allVacancies.totalFiltered
      }
    ]
  }, [allVacancies])

  const mostPopularColumns = [
    {
      Header: 'Nome da empresa',
      accessor: 'company.name',
      align: 'left',
      width: '30rem'
    },
    {
      Header: 'Tipo',
      accessor: 'type',
      align: 'left',
      width: '30rem'
    },
    {
      Header: 'Semestre',
      accessor: 'semester',
      align: 'left',
      width: '30rem'
    },
    {
      Header: 'Data limite para inscrção',
      accessor: 'limitDate',
      align: 'left',
      width: '30rem'
    },
    {
      Header: 'Data da graduação',
      accessor: 'graduationDate',
      align: 'left',
      width: '30rem'
    },
    {
      Header: 'Cursos',
      accessor: 'courses',
      align: 'left',
      width: '30rem'
    },
    {
      Header: 'Area',
      accessor: 'area',
      align: 'left',
      width: '30rem'
    },
    {
      Header: 'Espaço de trabalho',
      accessor: 'workplace',
      align: 'left',
      width: '30rem'
    },
    {
      Header: 'Horas por dia',
      accessor: 'hoursPerDay',
      align: 'left',
      width: '30rem'
    },
    {
      Header: 'Salário',
      accessor: 'salary',
      align: 'left',
      width: '30rem',
      type: 'money'
    },
    {
      Header: 'Nível inglês',
      accessor: 'requirements.englishLevel',
      align: 'left',
      width: '30rem'
    },
    {
      Header: 'Data de cadastro',
      accessor: 'createdTime',
      align: 'left',
      width: '30rem'
    },
    {
      Header: 'Visualizar',
      accessor: 'actions',
      align: 'center',
      width: '30rem',
      type: 'actions'
    }
  ]

  return (
    <S.Container>
      <S.BodyCardsGroup>
        {vacancyTotalCards.map((card) => (
          <CardTotal
            loading={allVacanciesLoading}
            key={card.id}
            icon={card.icon}
            text={card.text}
            total={card?.total?.toString()}
          />
        ))}
      </S.BodyCardsGroup>

      <Table
        columns={mostPopularColumns}
        count={allVacancies.total}
        page={values.page}
        data={
          allVacancies?.jobs?.map?.((data: VacancyTableRow) => ({
            ...data,
            company: {
              name: data.company.name.replace(
                'EMPRESA NÃO INFORMADA - SUPER ESTÁGIOS',
                'N/A - Super estágios'
              )
            },
            type: vacancy.type(data.type ?? ''),
            limitDate: data.limitDate
              ? format(new Date(data.limitDate), 'dd/MM/yyyy')
              : '',
            graduationDate: data.graduationDate
              ? format(new Date(data.graduationDate), 'dd/MM/yyyy')
              : '',
            area:
              data.area.charAt(0).toUpperCase() +
              data.area.slice(1).toLowerCase(),
            workplace: vacancy.workplace(data.workplace ?? ''),
            requirements: {
              ...data.requirements,
              englishLevel: vacancy.englishLevel(
                data.requirements.englishLevel ?? ''
              )
            },
            createdTime: data.createdTime
              ? format(new Date(data.createdTime), 'dd/MM/yyyy')
              : ''
          })) ?? []
        }
        loading={allVacanciesLoading}
        onGetNextPage={handleChangePage}
        actions={{
          view: handleViewVacancy
          // select: handleSelect
        }}
      />
    </S.Container>
  )
}

export default Body
