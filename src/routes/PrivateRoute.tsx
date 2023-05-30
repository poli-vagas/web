import React from 'react'
import { Navigate } from 'react-router'
import useStore from '~/store'

interface Props {
  children: JSX.Element | React.ReactNode
  path?: string
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const isAuthenticated = useStore.getState().isAuthenticatedStore()

  if (isAuthenticated) {
    return <>{children}</>
  }

  return <Navigate to="/" replace />
}

export default PrivateRoute
