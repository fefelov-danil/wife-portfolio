import carousel1 from '@/public/images/portfolio/miratal-prev.jpg'
import carousel2 from '@/public/images/portfolio/aroma-prev.jpg'
import carousel3 from '@/public/images/portfolio/dr-prev.jpg'
import carousel4 from '@/public/images/portfolio/simplac-prev.jpg'

export const carouselItems = [
  { title: 'Miratal', subtitle: 'Фирменный стиль', num: '01', img: carousel1 },
  { title: 'Aroma', subtitle: 'App', num: '02', img: carousel2 },
  { title: 'Dream Republic', subtitle: 'App', num: '03', img: carousel3 },
  { title: 'Simplac', subtitle: 'Site', num: '04', img: carousel4 },
] as const

export const paramsForCarousel = {
  initialActive: 2,
  indexLastElOfArr: 3,
  mouseOffsetInPercent: 8,
} as const
