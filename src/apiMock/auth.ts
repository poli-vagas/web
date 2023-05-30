import * as uuid from 'uuid'
import { getAleatoryNumber } from '~/utils/aleatoryNumber'

export const auth_response = {
  user: {
    id: 1,
    name: 'Ewerton',
    email: 'ewerton5@hotmail.com',
    profileImage: `https://randomuser.me/api/portraits/men/${getAleatoryNumber(
      1,
      95
    )}.jpg`,
    type: 'admin',
    roles: []
  },
  accessToken: uuid.v4(),
  expires_at: new Date().getTime() + 86400000
}
