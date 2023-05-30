import { AccessType } from '~/services/auth/types'

export interface CanViewProps {
  access: string
  role: AccessType
}
