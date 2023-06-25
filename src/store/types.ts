import {
  AuthRequest,
  AuthResponse,
  ForgotPasswordResetRequest,
  ForgotPasswordSendCodeRequest,
  ForgotPasswordValidateCodeRequest
} from '~/services/auth/types'
import {
  VacancyTableRequest,
  VacancyTableResponse
} from '~/services/vacancies/types'
import {
  NotificationDetailsRequest,
  NotificationDetailsResponse,
  NotificationTableRequest,
  NotificationTableResponse,
  SendNotificationRequest
} from '~/services/notifications/types'
import {
  ConfigurationDetailsRequest,
  ConfigurationDetailsResponse,
  ConfigurationTableRequest,
  ConfigurationTableResponse,
  ConfigurationType,
  CreateConfigurationRequest,
  DeleteConfigurationRequest
} from '~/services/configurations/types'
import {
  AdministratorDetailsRequest,
  AdministratorDetailsResponse,
  AdministratorTableRequest,
  AdministratorTableResponse,
  CreateAdministratorRequest,
  DeleteAdministratorRequest,
  PatchAdministratorRequest
} from '~/services/administrator/types'

export type AuthStore = {
  authenticated: boolean
  authenticationLoading: boolean
  authenticationData: AuthResponse
  login: (data: AuthRequest, callback?: () => void) => void
  logout: (callback?: () => void) => void
  isAuthenticatedStore: () => void
}

export type ForgotStore = {
  forgotStep: number
  forgotLoading: boolean
  forgotData: {
    email: string
    code: string
  }
  sendCodeToEmail: (
    data: ForgotPasswordSendCodeRequest,
    callback?: () => void
  ) => void
  validateCodeFromEmail: (
    data: ForgotPasswordValidateCodeRequest,
    callback?: () => void
  ) => void
  resetPassword: (
    data: ForgotPasswordResetRequest,
    callback?: () => void
  ) => void
  clearForgot: () => void
}

export type VacanciesStore = {
  allVacancies: VacancyTableResponse | null
  allVacanciesLoading: boolean
  vacancyDetailsLoading: boolean
  getAllVacancies: (params: VacancyTableRequest) => void
  clearVacancyDetails: () => void
}

export type NotificationStore = {
  allNotifications: NotificationTableResponse | null
  allNotificationsLoading: boolean
  notificationDetails: NotificationDetailsResponse | null
  notificationDetailsLoading: boolean
  getAllNotifications: (params: NotificationTableRequest) => void
  getNotificationDetails: (params: NotificationDetailsRequest) => void
  patchSendNotification: (
    params: SendNotificationRequest,
    callback?: () => void
  ) => void
  clearNotificationDetails: () => void
}

export type ConfigurationStore = {
  typeOfConfiguration: ConfigurationType
  allConfigurations: ConfigurationTableResponse | null
  allConfigurationsLoading: boolean
  configurationDetails: ConfigurationDetailsResponse | null
  configurationDetailsLoading: boolean
  defineConfigurationType: (value: ConfigurationType) => void
  getAllConfigurations: (params: ConfigurationTableRequest) => void
  getConfigurationDetails: (params: ConfigurationDetailsRequest) => void
  createConfiguration: (
    params: CreateConfigurationRequest,
    callback?: () => void
  ) => void
  deleteConfiguration: (
    params: DeleteConfigurationRequest,
    callback?: () => void
  ) => void
  clearConfigurationDetails: () => void
}

export type AdministratorStore = {
  allAdministrators: AdministratorTableResponse | null
  allAdministratorsLoading: boolean
  administratorDetails: AdministratorDetailsResponse | null
  administratorDetailsLoading: boolean
  getAllAdministrators: (params: AdministratorTableRequest) => void
  getAdministratorDetails: (params: AdministratorDetailsRequest) => void
  deleteAdministrator: (
    params: DeleteAdministratorRequest,
    callback?: () => void
  ) => void
  createAdministrator: (
    params: CreateAdministratorRequest,
    callback?: () => void
  ) => void
  patchAdministrator: (
    params: PatchAdministratorRequest,
    callback?: () => void
  ) => void
  clearAdministratorDetails: () => void
}
