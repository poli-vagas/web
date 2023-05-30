/* eslint-disable @typescript-eslint/no-unused-vars */

import { GetState, SetState } from 'zustand'
import { toastError, toastSuccess } from '~/utils/toast'
import { NotificationStore } from '../types'

import {
  NotificationDetailsRequest,
  SendNotificationRequest,
  NotificationTableRequest,
  NotificationTableResponse
} from '~/services/notifications/types'
import NotificationService from '~/services/notifications'
import { EMPTY_NOTIFICATION_DETAILS } from '../emptyValues/notification'

const createNotificationSlice = (
  set: SetState<NotificationStore>,
  get: GetState<NotificationStore>
) => ({
  allNotifications: {
    count: 0,
    rows: []
  },
  allNotificationsLoading: false,
  notificationDetails: EMPTY_NOTIFICATION_DETAILS,
  notificationDetailsLoading: false,
  getAllNotifications: async (params: NotificationTableRequest) => {
    try {
      set({
        allNotificationsLoading: true,
        allNotifications: {
          count: 0,
          rows: []
        }
      })
      const result = await NotificationService.getAllNotifications(params)
      set({
        allNotificationsLoading: false,
        allNotifications: result
      })
    } catch (error) {
      set({
        allNotificationsLoading: false,
        allNotifications: {
          count: 0,
          rows: []
        }
      })
      toastError(error)
    }
  },
  getNotificationDetails: async (params: NotificationDetailsRequest) => {
    try {
      set({
        notificationDetailsLoading: true,
        notificationDetails: EMPTY_NOTIFICATION_DETAILS
      })
      const result = await NotificationService.getNotificationDetails(params)
      set({
        notificationDetailsLoading: false,
        notificationDetails: result
      })
    } catch (error) {
      set({
        notificationDetailsLoading: false,
        notificationDetails: EMPTY_NOTIFICATION_DETAILS
      })
      toastError(error)
    }
  },

  patchSendNotification: async (
    params: SendNotificationRequest,
    callback?: () => void
  ) => {
    const oldAllNotifications = get()
      ?.allNotifications as NotificationTableResponse
    try {
      await NotificationService.patchSendNotification(params)
      const newoldAllNotifications = {
        ...oldAllNotifications,
        rows: oldAllNotifications?.rows?.map((item) => {
          if (item.id === params.id) {
            return {
              ...item,
              isSent: true
            }
          }
          return item
        })
      }

      set({
        allNotifications: newoldAllNotifications
      })
      callback && callback()
      toastSuccess('Notificação enviada com sucesso!')
    } catch (error) {
      toastError(error)
    }
  },

  clearNotificationDetails: async () => {
    set({
      notificationDetails: EMPTY_NOTIFICATION_DETAILS
    })
  }
})

export default createNotificationSlice
