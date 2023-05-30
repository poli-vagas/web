import create, { GetState, SetState } from 'zustand'
import createAuthSlice from './slices/createAuthSlice'
import createForgotSlice from './slices/createForgotSlice'
import createVacanciesSlice from './slices/createVacanciesSlice'
import createNotificationSlice from './slices/createNotificationSlice'
import createConfigurationSlice from './slices/createConfigurationSlice'
import createAdministratorSlice from './slices/createAdministratorSlice'
import {
  AuthStore,
  ForgotStore,
  VacanciesStore,
  NotificationStore,
  ConfigurationStore,
  AdministratorStore
} from './types'

const useStore = create((set, get) => ({
  ...createAuthSlice(set as SetState<AuthStore>, get as GetState<AuthStore>),
  ...createForgotSlice(
    set as SetState<ForgotStore>,
    get as GetState<ForgotStore>
  ),
  ...createVacanciesSlice(
    set as SetState<VacanciesStore>,
    get as GetState<VacanciesStore>
  ),
  ...createNotificationSlice(
    set as SetState<NotificationStore>,
    get as GetState<NotificationStore>
  ),
  ...createConfigurationSlice(
    set as SetState<ConfigurationStore>,
    get as GetState<ConfigurationStore>
  ),
  ...createAdministratorSlice(
    set as SetState<AdministratorStore>,
    get as GetState<AdministratorStore>
  )
}))

export default useStore
