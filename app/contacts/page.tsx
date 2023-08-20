import { Contacts } from '@/modules/contacts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакты | Фефелов Даниил',
}

export default function Page() {
  return <Contacts />
}
