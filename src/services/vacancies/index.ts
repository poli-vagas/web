/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '../api'
import {
  VacancyTableRequest,
  VacancyTableResponse,
  VacancyTotalsRequest,
  VacancyTotalsResponse
} from './types'

class VacanciesService {
  async getAllVacancies(
    params: VacancyTableRequest
  ): Promise<VacancyTableResponse> {
    try {
      const result = await api.post<VacancyTableResponse>('/jobs/search', {
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

  async getVacanciesTotals(
    params: VacancyTotalsRequest
  ): Promise<VacancyTotalsResponse> {
    try {
      const result = await api.get<VacancyTotalsResponse>(`/jobs/totals`, {
        params
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
}

export default new VacanciesService()
