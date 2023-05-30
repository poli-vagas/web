import useStore from '~/store'
import TokenService from './token'
import { setup } from 'axios-cache-adapter'

const api = setup({
  baseURL: process.env.REACT_APP_API_URL,
  cache: {
    maxAge: 0.5 * 60 * 1000
  }
})

api.interceptors.request.use((config) => {
  const data = TokenService.getAuthData()
  if (data && data?.expires_at <= new Date().getTime()) {
    useStore.getState().logout(() => {
      window.location.href = window.location.origin
    })
    return config
  }
  if (config && data) {
    config.headers = {
      Authorization: 'Bearer ' + data?.accessToken
    }
  }

  return config
})

export default api
