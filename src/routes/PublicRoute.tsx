import React from 'react'
import { Navigate } from 'react-router'
import useStore from '~/store'
interface Props {
  children: JSX.Element | React.ReactNode
  path?: string
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  const isAuthenticated = useStore.getState().isAuthenticatedStore()

  if (isAuthenticated) {
    return <Navigate to="/dash" replace />
  }

  return <>{children}</>
}

export default PublicRoute
