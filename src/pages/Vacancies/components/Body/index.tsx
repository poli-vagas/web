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
  const {
    vacancyTotals,
    vacancyTotalsLoading,
    allVacancies,
    allVacanciesLoading
  } = useStore((store) => ({
    vacancyTotals: store.vacancyTotals,
    vacancyTotalsLoading: store.vacancyTotalsLoading,
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

  const handleFindVacancyById = useCallback(
    (id: string): VacancyTableRow | undefined => {
      return allVacancies.rows.find((item: VacancyTableRow) => item.id === id)
    },
    [allVacancies.rows]
  )

  const handleViewVacancy = useCallback(
    (id: number) => {
      navigate(`${id}`, { state: { backgroundLocation: location } })
    },
    [location, navigate]
  )

  const handleSelect = useCallback(
    (id: string) => {
      const vacancy = handleFindVacancyById(id)
      if (vacancy) {
        console.log('select vacancy id: ', id)
      }
    },
    [handleFindVacancyById]
  )

  const vacancyTotalCards = useMemo(() => {
    return [
      {
        id: uuid.v4(),
        icon: <IoBriefcaseOutline />,
        text: 'Total de vagas',
        total: vacancyTotals.totalVacancies
      },
      {
        id: uuid.v4(),
        icon: <IoBriefcase />,
        text: 'Vagas ativas',
        total: vacancyTotals.activeVacancies
      }
    ]
  }, [vacancyTotals])

  const mostPopularColumns = [
    {
      Header: 'Nome da empresa',
      accessor: 'company.name',
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
      Header: 'Salário',
      accessor: 'salary',
      align: 'left',
      width: '30rem',
      type: 'money'
    },
    {
      Header: 'Horas por dia',
      accessor: 'hoursPerDay',
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
      Header: 'Tipo',
      accessor: 'type',
      align: 'left',
      width: '30rem'
    },
    {
      Header: 'Ações',
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
            loading={vacancyTotalsLoading}
            key={card.id}
            icon={card.icon}
            text={card.text}
            total={card?.total?.toString()}
          />
        ))}
      </S.BodyCardsGroup>

      <Table
        columns={mostPopularColumns}
        count={allVacancies.count}
        page={values.page}
        data={allVacancies.rows.map((data: VacancyTableRow) => ({
          ...data,
          createdTime: format(new Date(data.createdTime), 'dd/MM/yyyy'),
          limitDate: data.limitDate
            ? format(new Date(data.limitDate), 'dd/MM/yyyy')
            : '',
          type: vacancy.type(data.type ?? '')
        }))}
        loading={allVacanciesLoading}
        onGetNextPage={handleChangePage}
        actions={{
          view: handleViewVacancy,
          select: handleSelect
        }}
      />
    </S.Container>
  )
}

export default Body