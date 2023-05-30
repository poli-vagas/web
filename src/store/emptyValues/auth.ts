import { AccessType, AuthResponse } from '~/services/auth/types'

export const EMPTY_AUTHENTICATION_DATA: AuthResponse = {
  user: {
    id: 0,
    name: '',
    email: '',
    profileImage: '',
    type: AccessType.admin,
    roles: []
  },
  accessToken: '',
  expires_at: 0
}
