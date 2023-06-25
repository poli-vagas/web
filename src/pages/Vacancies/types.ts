import { VacancyTableRequest } from '~/services/vacancies/types'

export const INITIAL_PARAMS: VacancyTableRequest = {
  filter: {},
  pageSize: 10,
  page: 0,
  notification: false
}
