export interface VacancyTableRequest {
  filter: {
    companyId?: string[]
    type?: string[]
    courseId?: string[]
    minLimitDate?: string
    maxLimitDate?: string
    area?: string[]
    workplace?: string[]
    minHoursPerDay?: number
    maxHoursPerDay?: number
    minSalary?: number
    hasFoodVoucher?: boolean
    hasTransportVoucher?: boolean
    hasHealthInsurance?: boolean
    hasLifeInsurance?: boolean
    englishLevel?: string[]
    minCreatedTime?: string
    maxCreatedTime?: string
  }
  pageSize: number
  page: number
  notification?: boolean
}

export interface NameId {
  id: string
  name: string
}

export interface Benefits {
  hasFoodVoucher: boolean | null
  hasTransportVoucher: boolean | null
  hasHealthInsurance: boolean | null
  hasLifeInsurance: boolean | null
  others: string | null
}

export type VacancyTableRow = {
  id: string
  company: {
    id: string
    name: string
  }
  type: string
  semester: number | null
  limitDate: string | null
  graduationDate: string | null
  integrationAgent: NameId | null
  courses: NameId[]
  description: string
  area: string
  workplace: string | null
  hoursPerDay: number | null
  salary: number | null
  benefits: Benefits
  requirements: {
    englishLevel: string | null
    otherLanguages: string | null
    softSkills: string | null
    hardSkills: string | null
  }
  contact: {
    linkedinUrl: string | null
    email: string | null
    emailInstructions: string | null
    phone: string | null
    url: string | null
    externalId: string | null
  }
  createdTime: string
}

export interface VacancyTableResponse {
  page: number
  pageSize: number
  total: number
  totalFiltered: number
  jobs: VacancyTableRow[] | []
}
