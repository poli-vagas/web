import { VacancyTableRequest } from '~/services/vacancies/types'

export const INITIAL_PARAMS: VacancyTableRequest = {
  limit: 10,
  page: 1,
  period: 5,
  name: null,
  salary: null,
  hoursPerDay: null,
  type: null
}
