import React from 'react'
import Header from './Header'
import Body from './Body'
import Content from '~/layouts/Content'
import useStore from '~/store'
import { INITIAL_PARAMS } from './types'
import { Formik } from 'formik'

const Administrators: React.FC = () => {
  const { getAllAdministrators } = useStore((store) => ({
    getAllAdministrators: store.getAllAdministrators
  }))

  return (
    <Formik
      initialValues={INITIAL_PARAMS}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values) => {
        getAllAdministrators({
          ...values,
          name: values?.name || null
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

export default Administrators
