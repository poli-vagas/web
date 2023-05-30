import React, { useCallback } from 'react'
import { APP_ACCESS } from '~/constants/access'
import { CanViewProps } from './types'

const CanView: React.FC<CanViewProps> = ({ role, access, children }) => {
  const hasAccess = useCallback(() => {
    return Boolean(APP_ACCESS[role]?.includes(access))
  }, [access, role])

  return hasAccess() ? <>{children}</> : <></>
}

export default CanView
