/* eslint-disable @typescript-eslint/no-unused-vars */

import { GetState, SetState } from 'zustand'
import { toastError, toastSuccess } from '~/utils/toast'
import VacanciesService from '~/services/vacancies'
import { VacanciesStore } from '../types'
import {
  VacancyTableRequest,
  VacancyTotalsRequest
} from '~/services/vacancies/types'
import { EMPTY_VACANCY_TOTALS } from '../emptyValues/vacancies'

const createVacanciesSlice = (
  set: SetState<VacanciesStore>,
  get: GetState<VacanciesStore>
) => ({
  allVacancies: [],
  allVacanciesLoading: false,
  vacancyDetailsLoading: false,
  vacancyTotals: EMPTY_VACANCY_TOTALS,
  vacancyTotalsLoading: false,
  getAllVacancies: async (params: VacancyTableRequest) => {
    try {
      set({
        allVacancies: [],
        allVacanciesLoading: true
      })
      const result = await VacanciesService.getAllVacancies(params)
      console.log('result', result)
      set({ allVacancies: result, allVacanciesLoading: false })
    } catch (error) {
      set({
        allVacancies: [],
        allVacanciesLoading: false
      })
      toastError(error)
    }
  },
  getVacancyTotals: async (params: VacancyTotalsRequest) => {
    try {
      set({ vacancyTotals: EMPTY_VACANCY_TOTALS, vacancyTotalsLoading: true })
      const result = await VacanciesService.getVacanciesTotals(params)
      set({ vacancyTotals: result, vacancyTotalsLoading: false })
    } catch (error) {
      set({ vacancyTotals: EMPTY_VACANCY_TOTALS, vacancyTotalsLoading: false })
      toastError(error)
    }
  }
})

export default createVacanciesSlice
