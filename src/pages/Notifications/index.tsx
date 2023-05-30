import React from 'react'
import Header from './Header'
import Body from './Body'
import Content from '~/layouts/Content'
import useStore from '~/store'
import { INITIAL_PARAMS } from './types'
import { Formik } from 'formik'

const Notifications: React.FC = () => {
  const { getAllNotifications } = useStore((store) => ({
    getAllNotifications: store.getAllNotifications
  }))

  return (
    <Formik
      initialValues={INITIAL_PARAMS}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values) => {
        getAllNotifications({
          ...values,
          message: values?.message || null,
          dateEnd: values?.dateEnd || null,
          dateInit: values?.dateInit || null,
          audience: values?.audience || null
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

export default Notifications
