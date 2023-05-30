/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '../api'
import {
  ConfigurationDetailsRequest,
  ConfigurationDetailsResponse,
  ConfigurationTableRequest,
  ConfigurationTableResponse,
  CreateConfigurationRequest,
  CreateConfigurationResponse,
  DeleteConfigurationRequest
} from './types'

class ConfigurationsService {
  getAllConfigurations = async ({
    type,
    ...params
  }: ConfigurationTableRequest): Promise<ConfigurationTableResponse> => {
    try {
      const result = await api.get<ConfigurationTableResponse>(`/${type}`, {
        params: {
          ...params,
          page: params?.page ? params?.page - 1 : 0
        }
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

  getConfigurationDetails = async ({
    type,
    id
  }: ConfigurationDetailsRequest): Promise<ConfigurationDetailsResponse> => {
    try {
      const result = await api.get<ConfigurationDetailsResponse>(
        `/${type}/${id}`
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

  createConfiguration = async ({
    type,
    ...params
  }: CreateConfigurationRequest): Promise<CreateConfigurationResponse> => {
    try {
      const result = await api.post(`/${type}`, params)
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

  deleteConfiguration = async ({
    type,
    id
  }: DeleteConfigurationRequest): Promise<number> => {
    try {
      const result = await api.delete(`/${type}/${id}`)
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

export default new ConfigurationsService()
