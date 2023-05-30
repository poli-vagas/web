/* eslint-disable @typescript-eslint/no-unused-vars */

import { GetState, SetState } from 'zustand'
import { toastError, toastSuccess } from '~/utils/toast'
import { AdministratorStore } from '../types'

import {
  AdministratorDetailsRequest,
  AdministratorTableRequest,
  AdministratorTableResponse,
  CreateAdministratorRequest,
  DeleteAdministratorRequest,
  PatchAdministratorRequest
} from '~/services/administrator/types'
import AdministratorService from '~/services/administrator'
import { EMPTY_ADMINISTRATOR_DETAILS } from '../emptyValues/administrator'

const createAdministratorSlice = (
  set: SetState<AdministratorStore>,
  get: GetState<AdministratorStore>
) => ({
  allAdministrators: {
    count: 0,
    rows: []
  },
  allAdministratorsLoading: false,
  administratorDetails: EMPTY_ADMINISTRATOR_DETAILS,
  administratorDetailsLoading: false,
  getAllAdministrators: async (params: AdministratorTableRequest) => {
    try {
      set({
        allAdministratorsLoading: true,
        allAdministrators: {
          count: 0,
          rows: []
        }
      })
      const result = await AdministratorService.getAllAdministrators(params)
      set({
        allAdministratorsLoading: false,
        allAdministrators: result
      })
    } catch (error) {
      set({
        allAdministratorsLoading: false,
        allAdministrators: {
          count: 0,
          rows: []
        }
      })
      toastError(error)
    }
  },
  getAdministratorDetails: async (params: AdministratorDetailsRequest) => {
    try {
      set({
        administratorDetailsLoading: true,
        administratorDetails: EMPTY_ADMINISTRATOR_DETAILS
      })
      const result = await AdministratorService.getAdministratorDetails(params)
      set({
        administratorDetailsLoading: false,
        administratorDetails: result
      })
    } catch (error) {
      set({
        administratorDetailsLoading: false,
        administratorDetails: EMPTY_ADMINISTRATOR_DETAILS
      })
      toastError(error)
    }
  },

  deleteAdministrator: async (
    params: DeleteAdministratorRequest,
    callback?: () => void
  ) => {
    const oldAllAdministrators = get()
      ?.allAdministrators as AdministratorTableResponse
    try {
      await AdministratorService.deleteAdministrator(params)
      const newoldAllAdministrators = {
        ...oldAllAdministrators,
        count: oldAllAdministrators.count - 1,
        rows: oldAllAdministrators?.rows?.filter(
          (item) => item.id !== params.id
        )
      }

      set({
        allAdministrators: newoldAllAdministrators
      })
      callback && callback()
      toastSuccess('Administrador enviado com sucesso!')
    } catch (error) {
      toastError(error)
    }
  },

  createAdministrator: async (
    params: CreateAdministratorRequest,
    callback?: () => void
  ) => {
    const oldAllAdministrators = get()
      ?.allAdministrators as AdministratorTableResponse
    try {
      const result = await AdministratorService.createAdministrator(params)
      const newoldAllAdministrators = {
        ...oldAllAdministrators,
        count: oldAllAdministrators.count + 1,
        rows: [...oldAllAdministrators?.rows, result]
      }

      set({
        allAdministrators: newoldAllAdministrators
      })
      callback && callback()
      toastSuccess('Administrador cadastrado com sucesso!')
    } catch (error) {
      toastError(error)
    }
  },

  patchAdministrator: async (
    params: PatchAdministratorRequest,
    callback?: () => void
  ) => {
    const oldAllAdministrators = get()
      ?.allAdministrators as AdministratorTableResponse
    try {
      const result = await AdministratorService.patchAdministrator(params)

      const newoldAllAdministrators = {
        ...oldAllAdministrators,
        rows: oldAllAdministrators?.rows?.map((item) => {
          if (item.id === params.id) {
            return {
              ...item,
              ...result
            }
          }
          return item
        })
      }

      set({
        allAdministrators: newoldAllAdministrators
      })
      callback && callback()
      toastSuccess('Administrador cadastrado com sucesso!')
    } catch (error) {
      toastError(error)
    }
  },

  clearAdministratorDetails: async () => {
    set({
      administratorDetails: EMPTY_ADMINISTRATOR_DETAILS
    })
  }
})

export default createAdministratorSlice
