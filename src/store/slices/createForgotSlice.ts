/* eslint-disable @typescript-eslint/no-unused-vars */

import { GetState, SetState } from 'zustand'
import { toastError, toastSuccess } from '~/utils/toast'
import AuthService from '~/services/auth'
import {
  ForgotPasswordResetRequest,
  ForgotPasswordSendCodeRequest,
  ForgotPasswordValidateCodeRequest
} from '~/services/auth/types'

import { ForgotStore } from '../types'

const createForgotSlice = (
  set: SetState<ForgotStore>,
  get: GetState<ForgotStore>
) => ({
  forgotStep: 0,
  forgotLoading: false,
  forgotData: {
    email: '',
    code: ''
  },
  sendCodeToEmail: async (
    data: ForgotPasswordSendCodeRequest,
    callback?: () => void
  ) => {
    try {
      set({
        forgotStep: 0,
        forgotLoading: true,
        forgotData: {
          email: '',
          code: ''
        }
      })
      const code = await AuthService.sendCodeToEmail(data)
      if (code >= 400) {
        throw new Error('Erro ao enviar o código, tente novamente!')
      }

      set({
        forgotStep: 1,
        forgotLoading: false,
        forgotData: {
          email: data.email,
          code: ''
        }
      })
      toastSuccess('E-mail enviado com sucesso!')
      callback && callback()
    } catch (error) {
      set({
        forgotStep: 0,
        forgotLoading: false,
        forgotData: {
          email: '',
          code: ''
        }
      })
      toastError(error)
    }
  },
  validateCodeFromEmail: async (
    data: ForgotPasswordValidateCodeRequest,
    callback?: () => void
  ) => {
    try {
      set({
        forgotStep: 1,
        forgotLoading: true
      })
      const code = await AuthService.validateCodeFromEmail(data)
      if (code >= 400) {
        throw new Error('Erro ao validar o código, tente novamente!')
      }
      set({
        forgotStep: 2,
        forgotLoading: false,
        forgotData: {
          email: data.email,
          code: data.code
        }
      })
      toastSuccess('Código validado com sucesso!')
      callback && callback()
    } catch (error) {
      set({
        forgotStep: 1,
        forgotLoading: false,
        forgotData: {
          email: data.email,
          code: ''
        }
      })
      toastError(error)
    }
  },
  resetPassword: async (
    data: ForgotPasswordResetRequest,
    callback?: () => void
  ) => {
    try {
      set({
        forgotStep: 2,
        forgotLoading: true
      })
      const code = await AuthService.resetPassword(data)
      if (code >= 400) {
        throw new Error('Erro ao validar o código, tente novamente!')
      }
      set({
        forgotStep: 0,
        forgotLoading: false,
        forgotData: {
          email: '',
          code: ''
        }
      })
      toastSuccess('Senha atualizada com sucesso!')
      callback && callback()
    } catch (error) {
      set({
        forgotStep: 2,
        forgotLoading: false,
        forgotData: {
          email: '',
          code: ''
        }
      })
      toastError(error)
    }
  },
  clearForgot: () => {
    set({
      forgotStep: 0,
      forgotLoading: false,
      forgotData: {
        email: '',
        code: ''
      }
    })
  }
})

export default createForgotSlice
