import React from 'react'
import Content from '~/layouts/Content'
import Header from './components/Header'
import Body from './components/Body'
import { Formik } from 'formik'
import useStore from '~/store'
import { INITIAL_PARAMS } from './types'

const Vacancies: React.FC = () => {
  const { getAllVacancies, getVacancyTotals } = useStore((store) => ({
    getAllVacancies: store.getAllVacancies,
    getVacancyTotals: store.getVacancyTotals
  }))

  return (
    <Formik
      initialValues={INITIAL_PARAMS}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values) => {
        getAllVacancies({ ...values, name: values?.name || null })
        getVacancyTotals({
          period: Number(values.period)
        })
      }}
    >
      {() => (
        <>
          <Content header={<Header />} body={<Body />} />
        </>
      )}
    </Formik>
  )
}

export default Vacancies
