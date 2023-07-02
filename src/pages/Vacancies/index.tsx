import React, { useEffect } from 'react'
import Content from '~/layouts/Content'
import Header from './components/Header'
import Body from './components/Body'
import { Formik } from 'formik'
import useStore from '~/store'
import { INITIAL_PARAMS } from './types'
import { parseBenefits } from '~/constants/vacancy'

const Vacancies: React.FC = () => {
  const { getAllVacancies, getCompanies, getCourses } = useStore((store) => ({
    getAllVacancies: store.getAllVacancies,
    getCompanies: store.getCompanies,
    getCourses: store.getCourses
  }))

  useEffect(() => {
    getCompanies()
    getCourses()
  }, [getCompanies, getCourses])

  return (
    <Formik
      initialValues={INITIAL_PARAMS}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values) => {
        const {
          notification,
          filter: { benefits, ...restOfFilter },
          ...rest
        } = values
        const parsedBenefits = parseBenefits(benefits ?? [])
        const filter = { ...restOfFilter, ...parsedBenefits }
        if (notification) console.log('notification', filter)
        else
          getAllVacancies({
            filter,
            ...rest
            // name: values?.name || null
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
