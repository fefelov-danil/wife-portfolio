'use client'
import styles from './Contacts.module.scss'
import Link from 'next/link'
import iconSet from '@/assets/icons/selection.json'
import IcomoonReact from 'icomoon-react'
import { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { animation } from '@/constants/animation'
import bg from '@/public/images/background/shattered.png'

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.bg} style={{ background: `url(${bg.src})` }}></div>
      <motion.div
        className={styles.title}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h1 variants={animation.fadeAnimation} custom={0.2}>
          контакты
        </motion.h1>
      </motion.div>
      <div className={styles.social}>
        <motion.ul initial={'hidden'} whileInView={'visible'} viewport={{ once: true, amount: 0.1 }}>
          <motion.li
            style={{ '--i': 6, '--clr': '#2AA2DD' } as CSSProperties}
            variants={animation.fadeAnimation}
            custom={0.2}
          >
            <Link href={'https://telegram.me/Danil_Fefelov'} target="_blank">
              <span>
                <IcomoonReact iconSet={iconSet} color={'#fff'} icon={'telegram'} size={25} />
              </span>
              telegram
            </Link>
          </motion.li>
          <motion.li
            style={{ '--i': 5, '--clr': '#4AC759' } as CSSProperties}
            variants={animation.fadeAnimation}
            custom={0.3}
          >
            <Link href={'https://api.whatsapp.com/send?phone=79832664581'} target="_blank">
              <span>
                <IcomoonReact iconSet={iconSet} color={'#fff'} icon={'whatsapp'} size={25} />
              </span>
              whatsapp
            </Link>
          </motion.li>
          <motion.li
            style={{ '--i': 4, '--clr': '#0D1117' } as CSSProperties}
            variants={animation.fadeAnimation}
            custom={0.4}
          >
            <Link href={'https://github.com/fefelov-danil'} target="_blank">
              <span>
                <IcomoonReact iconSet={iconSet} color={'#fff'} icon={'github'} size={25} />
              </span>
              github
            </Link>
          </motion.li>
          <motion.li
            style={{ '--i': 3, '--clr': '#0A66C2' } as CSSProperties}
            variants={animation.fadeAnimation}
            custom={0.5}
          >
            <Link href={'https://www.linkedin.com/in/danil-fefelov-0a6570259/'} target="_blank">
              <span>
                <IcomoonReact iconSet={iconSet} color={'#fff'} icon={'linkedin'} size={25} />
              </span>
              linkedin
            </Link>
          </motion.li>
          <motion.li
            style={{ '--i': 1, '--clr': '#E64133' } as CSSProperties}
            variants={animation.fadeAnimation}
            custom={0.6}
          >
            <Link href={'mailto:fefelov.danil@gmail.com'} target="_blank">
              <span>
                <IcomoonReact iconSet={iconSet} color={'#fff'} icon={'email'} size={25} />
              </span>
              email
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  )
}
