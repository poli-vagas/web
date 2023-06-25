/* eslint-disable @typescript-eslint/no-explicit-any */
import { removeEmptyStringProperties } from '~/utils/object'
import api from '../api'
import { VacancyTableRequest, VacancyTableResponse } from './types'

class VacanciesService {
  async getAllVacancies(
    params: VacancyTableRequest
  ): Promise<VacancyTableResponse> {
    try {
      const filter = removeEmptyStringProperties(params.filter)
      const result = await api.post<VacancyTableResponse>('/jobs/search', {
        ...params,
        filter,
        page: params?.page ? params?.page - 1 : 0
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
