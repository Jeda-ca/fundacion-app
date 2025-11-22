// types/admin/index.ts
export interface MenuItem {
  icon: string
  label: string
  path: string
  badge?: number
  subItems?: MenuItem[]
}

export interface User {
  id: string
  nombre: string
  email: string
  rol: 'ADMIN' | 'DOCENTE'
  foto?: string
}

export interface BreadcrumbItem {
  label: string
  path?: string
}

export interface StatsCardData {
  title: string
  value: string | number
  icon: string
  color: 'pink' | 'purple' | 'orange' | 'blue' | 'green'
  change?: {
    value: number
    type: 'increase' | 'decrease'
  }
}

export interface QuickAction {
  label: string
  icon: string
  color: 'pink' | 'purple' | 'orange' | 'blue' | 'green'
  path: string
}
