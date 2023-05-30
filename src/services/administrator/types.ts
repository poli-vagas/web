import { AccessType } from '../auth/types'

export interface AdministratorTableRequest {
  limit?: number
  page?: number
  name?: string | null
}

export interface AdministratorTableItem {
  id: number
  name: string
  email: string
  type: AccessType
  status: boolean
}

export interface AdministratorTableResponse {
  count: number
  rows: AdministratorTableItem[]
}

export interface AdministratorDetailsRequest {
  id: number
}

export interface DeleteAdministratorRequest {
  id: number
}

export interface AdministratorDetailsResponse {
  id: number | null
  name: string
  email: string
  type: AccessType
  status: boolean
}

export interface PatchAdministratorRequest {
  id: number
  name?: string
  email?: string
  type?: AccessType
  status?: boolean
}

export interface CreateAdministratorRequest {
  name: string
  email: string
  type: AccessType
  status: boolean
}

export type CreateAdministratorResponse = AdministratorTableItem
