import { Portfolio } from '@/modules/portfolio'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Портфолио | Фефелов Даниил',
}

export default function Page() {
  return <Portfolio />
}
