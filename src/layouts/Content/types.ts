import { ReactChild, ReactChildren } from 'react'

export interface ContentProps {
  header?: ReactChild | ReactChildren
  body: ReactChild | ReactChildren
  goBack?: boolean
}
