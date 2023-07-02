import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Content from '~/layouts/Content'
import Header from './components/Header'
import Body from './components/Body'
import { Formik } from 'formik'
import useStore from '~/store'
import { INITIAL_PARAMS } from './types'
import { parseBenefits } from '~/constants/vacancy'

const Vacancies: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { getAllVacancies, getCompanies, getCourses, saveFilter } = useStore(
    (store) => ({
      getAllVacancies: store.getAllVacancies,
      getCompanies: store.getCompanies,
      getCourses: store.getCourses,
      saveFilter: store.saveFilter
    })
  )

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
        if (notification) {
          saveFilter(filter)
          navigate('send-notification', {
            state: { backgroundLocation: location }
          })
        } else
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
