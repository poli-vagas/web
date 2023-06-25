import React from 'react'
import Content from '~/layouts/Content'
import Header from './components/Header'
import Body from './components/Body'
import { Formik } from 'formik'
import useStore from '~/store'
import { INITIAL_PARAMS } from './types'

const Vacancies: React.FC = () => {
  const { getAllVacancies } = useStore((store) => ({
    getAllVacancies: store.getAllVacancies
  }))

  return (
    <Formik
      initialValues={INITIAL_PARAMS}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values) => {
        const { notification, ...rest } = values
        if (notification) console.log('notification', rest.filter)
        else
          getAllVacancies({
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
