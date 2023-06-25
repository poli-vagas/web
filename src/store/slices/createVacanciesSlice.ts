/* eslint-disable @typescript-eslint/no-unused-vars */

import { GetState, SetState } from 'zustand'
import { toastError, toastSuccess } from '~/utils/toast'
import VacanciesService from '~/services/vacancies'
import { VacanciesStore } from '../types'
import { VacancyTableRequest } from '~/services/vacancies/types'

const createVacanciesSlice = (
  set: SetState<VacanciesStore>,
  get: GetState<VacanciesStore>
) => ({
  allVacancies: {
    page: 0,
    pageSize: 0,
    total: 0,
    totalFiltered: 0,
    jobs: []
  },
  allVacanciesLoading: false,
  vacancyDetailsLoading: false,
  getAllVacancies: async (params: VacancyTableRequest) => {
    try {
      set({
        allVacancies: {
          page: 0,
          pageSize: 0,
          total: 0,
          totalFiltered: 0,
          jobs: []
        },
        allVacanciesLoading: true
      })
      const result = await VacanciesService.getAllVacancies(params)
      set({ allVacancies: result, allVacanciesLoading: false })
    } catch (error) {
      set({
        allVacancies: {
          page: 0,
          pageSize: 0,
          total: 0,
          totalFiltered: 0,
          jobs: []
        },
        allVacanciesLoading: false
      })
      toastError(error)
    }
  }
})

export default createVacanciesSlice
