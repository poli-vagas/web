import { AuthResponse } from './auth/types'

class TokenService {
  setAuthData(data: AuthResponse) {
    localStorage.setItem('@poli:auth', JSON.stringify(data))
  }

  getAuthData(): AuthResponse | undefined {
    const dataString = localStorage.getItem('@poli:auth')
    const data = dataString && JSON.parse(dataString)
    return data
  }

  removeAuthData() {
    localStorage.removeItem('@poli:auth')
  }
}

export default new TokenService()
