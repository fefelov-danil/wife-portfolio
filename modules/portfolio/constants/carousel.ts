import carousel1 from '@/public/images/portfolio/todo.jpg'
import carousel2 from '@/public/images/portfolio/cards.jpg'
import carousel3 from '@/public/images/portfolio/social6.jpg'
import carousel4 from '@/public/images/portfolio/inkomPrime1.jpg'
import carousel5 from '@/public/images/portfolio/avtobiznes.jpg'
import carousel6 from '@/public/images/portfolio/iShop1.jpg'
import carousel7 from '@/public/images/portfolio/wasmer1.jpg'
import carousel8 from '@/public/images/portfolio/krastehnadzor1.jpg'

export const carouselItems = [
  { title: 'Todolist', subtitle: 'App', num: '01', img: carousel1 },
  { title: 'Cards', subtitle: 'App', num: '02', img: carousel2 },
  { title: 'Inctagram', subtitle: 'App', num: '03', img: carousel3 },
  { title: 'Inkomprime', subtitle: 'Site', num: '04', img: carousel4 },
  { title: 'iShop', subtitle: 'Site', num: '05', img: carousel6 },
  { title: 'Автобизнес', subtitle: 'Site', num: '06', img: carousel5 },
  { title: 'Васмер', subtitle: 'Site', num: '07', img: carousel7 },
  { title: 'Крастехнадзор', subtitle: 'Site', num: '08', img: carousel8 },
] as const

export const paramsForCarousel = {
  initialActive: 2,
  indexLastElOfArr: 7,
  mouseOffsetInPercent: 8,
} as const
