/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '../api'
import {
  AuthRequest,
  AuthResponse,
  ForgotPasswordResetRequest,
  ForgotPasswordSendCodeRequest,
  ForgotPasswordValidateCodeRequest
} from './types'

class AuthService {
  async login(data: AuthRequest): Promise<AuthResponse> {
    try {
      const result = await api.post<AuthResponse>('/signin', data)
      return result?.data
    } catch (error: any) {
      if (error?.response?.data) {
        throw new Error(
          error?.response?.data?.message || error?.response?.statusText
        )
      } else {
        throw error
      }
    }
  }

  async sendCodeToEmail(data: ForgotPasswordSendCodeRequest): Promise<number> {
    try {
      const result = await api.post('/forgot/send', data)
      return result?.status
    } catch (error: any) {
      if (error?.response?.data) {
        throw new Error(
          error?.response?.data?.message || error?.response?.statusText
        )
      } else {
        throw error
      }
    }
  }

  async validateCodeFromEmail(
    data: ForgotPasswordValidateCodeRequest
  ): Promise<number> {
    try {
      const result = await api.post('/forgot/validate', data)
      return result?.status
    } catch (error: any) {
      if (error?.response?.data) {
        throw new Error(
          error?.response?.data?.message || error?.response?.statusText
        )
      } else {
        throw error
      }
    }
  }

  async resetPassword(data: ForgotPasswordResetRequest): Promise<number> {
    try {
      const result = await api.post('/forgot/reset', data)
      return result?.status
    } catch (error: any) {
      if (error?.response?.data) {
        throw new Error(
          error?.response?.data?.message || error?.response?.statusText
        )
      } else {
        throw error
      }
    }
  }
}

export default new AuthService()
