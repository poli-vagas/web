import { AdministratorDetailsResponse } from '~/services/administrator/types'
import { AccessType } from '~/services/auth/types'

export const EMPTY_ADMINISTRATOR_DETAILS: AdministratorDetailsResponse = {
  id: null,
  name: '',
  email: '',
  type: AccessType.admin,
  status: true
}
