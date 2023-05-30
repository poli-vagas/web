/* eslint-disable @typescript-eslint/no-unused-vars */

import { GetState, SetState } from 'zustand'
import { toastError, toastSuccess } from '~/utils/toast'
import { ConfigurationStore } from '../types'

import {
  ConfigurationDetailsRequest,
  ConfigurationTableRequest,
  ConfigurationTableResponse,
  ConfigurationType,
  CreateConfigurationRequest,
  DeleteConfigurationRequest
} from '~/services/configurations/types'
import ConfigurationService from '~/services/configurations'
import { EMPTY_CONFIGURATION_DETAILS } from '../emptyValues/configuration'

const createConfigurationSlice = (
  set: SetState<ConfigurationStore>,
  get: GetState<ConfigurationStore>
) => ({
  typeOfConfiguration: 'interests',
  allConfigurations: {
    count: 0,
    rows: []
  },
  allConfigurationsLoading: false,
  configurationDetails: EMPTY_CONFIGURATION_DETAILS,
  configurationDetailsLoading: false,

  defineConfigurationType: async (value: ConfigurationType) => {
    set({ typeOfConfiguration: value })
  },
  getAllConfigurations: async (params: ConfigurationTableRequest) => {
    try {
      set({
        allConfigurationsLoading: true,
        allConfigurations: {
          count: 0,
          rows: []
        }
      })
      const result = await ConfigurationService.getAllConfigurations(params)
      set({
        allConfigurationsLoading: false,
        allConfigurations: result
      })
    } catch (error) {
      set({
        allConfigurationsLoading: false,
        allConfigurations: {
          count: 0,
          rows: []
        }
      })
      toastError(error)
    }
  },
  getConfigurationDetails: async (params: ConfigurationDetailsRequest) => {
    try {
      set({
        configurationDetailsLoading: true,
        configurationDetails: EMPTY_CONFIGURATION_DETAILS
      })
      const result = await ConfigurationService.getConfigurationDetails(params)
      set({
        configurationDetailsLoading: false,
        configurationDetails: result
      })
    } catch (error) {
      set({
        configurationDetailsLoading: false,
        configurationDetails: EMPTY_CONFIGURATION_DETAILS
      })
      toastError(error)
    }
  },

  createConfiguration: async (
    params: CreateConfigurationRequest,
    callback?: () => void
  ) => {
    const oldAllConfigurations = get()
      ?.allConfigurations as ConfigurationTableResponse
    try {
      const result = await ConfigurationService.createConfiguration(params)
      const newoldAllConfigurations = {
        ...oldAllConfigurations,
        count: oldAllConfigurations.count + 1,
        rows: [...oldAllConfigurations?.rows, result]
      }

      set({
        allConfigurations: newoldAllConfigurations
      })
      callback && callback()
      toastSuccess('Configuração cadastrada com sucesso!')
    } catch (error) {
      toastError(error)
    }
  },

  deleteConfiguration: async (
    params: DeleteConfigurationRequest,
    callback?: () => void
  ) => {
    const oldAllConfigurations = get()
      ?.allConfigurations as ConfigurationTableResponse
    try {
      await ConfigurationService.deleteConfiguration(params)
      const newoldAllConfigurations = {
        ...oldAllConfigurations,
        count: oldAllConfigurations.count - 1,
        rows: oldAllConfigurations?.rows.filter((item) => item.id !== params.id)
      }

      set({
        allConfigurations: newoldAllConfigurations
      })
      callback && callback()
      toastSuccess('Configuração excluída com sucesso!')
    } catch (error) {
      toastError(error)
    }
  },

  clearConfigurationDetails: async () => {
    set({
      configurationDetails: EMPTY_CONFIGURATION_DETAILS
    })
  }
})

export default createConfigurationSlice
