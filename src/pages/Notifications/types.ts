import { NotificationTableRequest } from '~/services/notifications/types'

export const INITIAL_PARAMS: NotificationTableRequest = {
  limit: 10,
  page: 1,
  message: null,
  dateInit: null,
  dateEnd: null,
  audience: null
}
