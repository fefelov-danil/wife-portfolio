import { Experience } from '@/modules/experience'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Опыт работы | Фефелов Даниил',
}

export default function Page() {
  return <Experience />
}
