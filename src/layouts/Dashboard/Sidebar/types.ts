import { ReactElement } from 'react'

type MenuOption = {
  value: string
  name: string
  icon: ReactElement
}

export interface SidebarProps {
  options: MenuOption[]
  currentPath: string
  changePath: (option: string) => void
}
