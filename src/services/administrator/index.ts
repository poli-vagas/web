/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '../api'
import {
  AdministratorDetailsRequest,
  AdministratorDetailsResponse,
  PatchAdministratorRequest,
  DeleteAdministratorRequest,
  AdministratorTableRequest,
  AdministratorTableResponse,
  CreateAdministratorRequest,
  CreateAdministratorResponse
} from './types'

class AdministratorsService {
  getAllAdministrators = async (
    params: AdministratorTableRequest
  ): Promise<AdministratorTableResponse> => {
    try {
      const result = await api.get<AdministratorTableResponse>(
        '/administrators',
        {
          params: {
            ...params,
            page: params?.page ? params?.page - 1 : 0
          }
        }
      )
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

  getAdministratorDetails = async (
    params: AdministratorDetailsRequest
  ): Promise<AdministratorDetailsResponse> => {
    try {
      const result = await api.get<AdministratorDetailsResponse>(
        `/administrators/${params.id}`,
        {
          params
        }
      )
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

  patchAdministrator = async (
    params: PatchAdministratorRequest
  ): Promise<AdministratorTableResponse> => {
    try {
      const result = await api.patch(`/administrators/${params.id}`, {
        status: params.status
      })

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

  createAdministrator = async (
    params: CreateAdministratorRequest
  ): Promise<CreateAdministratorResponse> => {
    try {
      const result = await api.post(`/administrators`, params)
      return result.data
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

  deleteAdministrator = async (
    params: DeleteAdministratorRequest
  ): Promise<number> => {
    try {
      const result = await api.delete(`/administrators/${params.id}`)
      return result.status
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

export default new AdministratorsService()
