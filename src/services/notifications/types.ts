import { Filter } from '../vacancies/types'

export interface NotificationTableRequest {
  limit?: number
  page?: number
  message?: string | null
  dateInit?: string | null
  dateEnd?: string | null
  audience?: number | null
}

export interface NotificationTableItem {
  id: number
  createdAt: string
  audience: number | null
  message: string
  isSent: boolean
}

export interface NotificationTableResponse {
  count: number
  rows: NotificationTableItem[]
}

export interface NotificationDetailsRequest {
  id: number
}

export interface NotificationDetailsResponse {
  id: number | null
  company: number | null
  month?: string
  year?: string
  message: string
}

export interface SendNotificationRequest {
  email: string
  filter: Filter
}
