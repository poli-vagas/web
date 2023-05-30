/* eslint-disable @typescript-eslint/no-unused-vars */

import { GetState, SetState } from 'zustand'
import { toastError } from '~/utils/toast'
import TokenService from '~/services/token'
import AuthService from '~/services/auth'
import { AuthRequest } from '~/services/auth/types'

import { AuthStore } from '../types'
import { EMPTY_AUTHENTICATION_DATA } from '../emptyValues/auth'

const createAuthSlice = (
  set: SetState<AuthStore>,
  get: GetState<AuthStore>
) => ({
  authenticated: false,
  authenticationLoading: false,
  authenticationData: EMPTY_AUTHENTICATION_DATA,
  login: async (data: AuthRequest, callback?: () => void) => {
    try {
      set({
        authenticated: false,
        authenticationLoading: true,
        authenticationData: EMPTY_AUTHENTICATION_DATA
      })

      const result = await AuthService.login(data)

      set({
        authenticated: true,
        authenticationLoading: false,
        authenticationData: result
      })

      TokenService.setAuthData(result)

      callback && callback()
    } catch (error) {
      set({
        authenticated: false,
        authenticationLoading: false,
        authenticationData: EMPTY_AUTHENTICATION_DATA
      })
      toastError(error)
    }
  },
  logout: (callback?: () => void) => {
    TokenService.removeAuthData()
    set({
      authenticated: false,
      authenticationData: EMPTY_AUTHENTICATION_DATA
    })
    callback && callback()
  },
  isAuthenticatedStore: () => {
    if (get().authenticated) {
      return true
    }
    const authData = TokenService.getAuthData()

    if (authData?.accessToken) {
      set({ authenticated: true, authenticationData: authData })
      return true
    }
    return false
  }
})

export default createAuthSlice
