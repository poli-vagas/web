import { NotificationDetailsResponse } from '~/services/notifications/types'

export const EMPTY_NOTIFICATION_DETAILS: NotificationDetailsResponse = {
  id: null,
  company: null,
  month: '',
  year: '',
  message: ''
}
