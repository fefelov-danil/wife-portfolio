import carousel1 from '@/public/images/portfolio/miratal-prev.jpg'
import carousel2 from '@/public/images/portfolio/aroma-prev.jpg'
import carousel3 from '@/public/images/portfolio/dr-prev.jpg'
import carousel4 from '@/public/images/portfolio/simplac-prev.jpg'
import carousel5 from '@/public/images/portfolio/my-prev.jpg'

export const carouselItems = [
  { title: 'Miratal', subtitle: 'Фирменный стиль', num: '01', img: carousel1 },
  { title: 'Aroma', subtitle: 'Logo', num: '02', img: carousel2 },
  { title: 'Dream Republic', subtitle: 'Logo', num: '03', img: carousel3 },
  { title: 'Simplac', subtitle: 'Logo', num: '04', img: carousel4 },
  { title: 'My', subtitle: 'Works', num: '05', img: carousel5 },
] as const

export const paramsForCarousel = {
  initialActive: 2,
  indexLastElOfArr: 4,
  mouseOffsetInPercent: 8,
} as const
