import localFont from 'next/font/local'
import { Passion_One } from 'next/font/google'

export const montserrat = localFont({
  src: [
    { path: '../public/fonts/Montserrat-Regular.woff', weight: '300' },
    { path: '../public/fonts/Montserrat-Medium.woff', weight: '400' },
    { path: '../public/fonts/Montserrat-SemiBold.woff', weight: '600' },
    { path: '../public/fonts/Montserrat-Bold.woff', weight: '800' },
  ],
  variable: '--font-montserrat',
})

export const muller = localFont({
  src: [{ path: '../public/fonts/MullerExtraBold.woff2', weight: '600' }],
  variable: '--font-muller',
})

export const baronNeue = localFont({
  src: [{ path: '../public/fonts/BaronNeueBold.woff', weight: '600' }],
  variable: '--font-baron-neue',
})

export const passionOne = Passion_One({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-passion-one',
})

export const orelo = localFont({
  src: [{ path: '../public/fonts/Orelo-sw-db.woff', weight: '600' }],
  variable: '--font-orelo',
})
