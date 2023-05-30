import { AccessType } from '~/services/auth/types'

export const ADMINISTRATOR_TYPES_LIST = [
  { value: AccessType.admin, label: 'Admin' },
  { value: AccessType.delegate, label: 'Delegada' }
]
