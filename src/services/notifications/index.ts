/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '../api'
import {
  NotificationDetailsRequest,
  NotificationDetailsResponse,
  SendNotificationRequest,
  NotificationTableRequest,
  NotificationTableResponse
} from './types'

class NotificationsService {
  getAllNotifications = async (
    params: NotificationTableRequest
  ): Promise<NotificationTableResponse> => {
    try {
      const result = await api.get<NotificationTableResponse>(
        '/notifications',
        {
          params: {
            ...params,
            page: params?.page ? params?.page - 1 : 0
          }
        }
      )
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

  getNotificationDetails = async (
    params: NotificationDetailsRequest
  ): Promise<NotificationDetailsResponse> => {
    try {
      const result = await api.get<NotificationDetailsResponse>(
        `/notifications/${params.id}`
      )
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

  patchSendNotification = async (
    params: SendNotificationRequest
  ): Promise<number> => {
    try {
      const result = await api.patch(`/notifications/send/${params.id}`, {
        isSent: params.isSent
      })

      return result.status
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

export default new NotificationsService()
