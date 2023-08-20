import { RouteNames } from '@/constants/routes'

export const menuItems = [
  { href: RouteNames.ABOUT, name: 'ОБО МНЕ' },
  { href: RouteNames.EXPERIENCE, name: 'ОПЫТ' },
  { href: RouteNames.PORTFOLIO, name: 'ПОРТФОЛИО' },
  { href: RouteNames.CONTACTS, name: 'КОНТАКТЫ' },
] as const
