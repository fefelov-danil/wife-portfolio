import styles from './ProjectsPopup.module.scss'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { StaticImageData } from 'next/image'
import { Slider } from '@/modules/portfolio/components/portfolioProjects/projectsPopup/slider/Slider'
import Link from 'next/link'
import iconSet from '@/assets/icons/selection.json'
import IcomoonReact from 'icomoon-react'
import { CommonBg } from '@/assets/svg'
import { animation } from '@/constants/animation'

type Props = {
  title: string
  subtitle: string
  technologies?: string[]
  images: StaticImageData[]
  link: string
  github?: string
  setOpenProjectPopup: (openProject: number) => void
  isSquarePhotos?: boolean
  children: ReactNode
}

export const ProjectsPopup = ({
  technologies,
  title,
  subtitle,
  images,
  link,
  github,
  setOpenProjectPopup,
  isSquarePhotos = false,
  children,
}: Props) => {
  const finalSliderClass = isSquarePhotos ? `${styles.sliderCol} ${styles.squarePhotos}` : styles.sliderCol

  return (
    <motion.div
      className={styles.profilePopup}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.3 }}
      variants={animation.quickFadeAnimation}
    >
      <CommonBg />
      <motion.button
        className={styles.closeBtn}
        onClick={() => setOpenProjectPopup(-1)}
        variants={animation.fadeAndScaleAnimation}
        custom={0.7}
      >
        <IcomoonReact iconSet={iconSet} color={'#fff'} icon="close" size={50} />
      </motion.button>
      <div className={styles.about}>
        <motion.h2 variants={animation.fadeBottomAnimation}>{title}</motion.h2>
        <motion.p className={styles.subtitle} variants={animation.fadeBottomAnimation} custom={0.15}>
          {subtitle}
        </motion.p>
        {technologies && (
          <ul className={styles.technologies}>
            {technologies.map((item, i) => (
              <motion.li key={i} variants={animation.fadeBottomAnimation} custom={i * 0.1 + 0.3}>
                {item}
              </motion.li>
            ))}
          </ul>
        )}
        <motion.div className={styles.projectLinks} variants={animation.fadeBottomAnimation} custom={0.45}>
          <Link href={link} className={styles.projectLink} target={'_blank'}>
            <IcomoonReact iconSet={iconSet} color={'#fff'} icon="link" size={22} /> <span>Перейти</span>
          </Link>
          {github && (
            <Link href={github} className={styles.projectLink} target={'_blank'}>
              <IcomoonReact iconSet={iconSet} color={'#fff'} icon="github" size={22} /> <span>GitHub</span>
            </Link>
          )}
        </motion.div>
        <div className={styles.desc}>{children}</div>
      </div>
      <motion.div className={finalSliderClass} variants={animation.fadeBottomAnimation} custom={0.75}>
        <Slider title={title} images={images} />
      </motion.div>
    </motion.div>
  )
}
