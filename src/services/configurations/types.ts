export type ConfigurationType = 'interests' | 'packs'
export interface ConfigurationTableRequest {
  limit?: number
  page?: number
  type: ConfigurationType
  name?: string | null
  dateStart?: string | null
  dateEnd?: string | null
}

export interface ConfigurationTableItem {
  id: number
  createAt: string
  name: string
  totalUsed: string
}

export interface ConfigurationTableResponse {
  count: number
  rows: ConfigurationTableItem[]
}

export interface ConfigurationDetailsRequest {
  id: number
  type: ConfigurationType
}

export interface ConfigurationDetailsResponse {
  id: number
  name: string
}

export interface DeleteConfigurationRequest {
  id: number
  type: ConfigurationType
}

export interface CreateConfigurationRequest {
  name: string
  type: ConfigurationType
}

export interface DeleteConfigurationRequest {
  id: number
  type: ConfigurationType
}

export type CreateConfigurationResponse = ConfigurationTableItem
