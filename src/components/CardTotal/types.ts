import { ReactElement } from 'react'

export interface CardTotalProps {
  icon: ReactElement
  text: string
  total: string
  hidden?: boolean
  loading?: boolean
}
