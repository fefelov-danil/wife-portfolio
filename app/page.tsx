import { About } from '@/modules/about'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Обо мне | Фефелов Даниил',
}

export default function Page() {
  return <About />
}
