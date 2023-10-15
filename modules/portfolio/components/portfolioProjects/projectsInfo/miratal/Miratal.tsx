import styles from '../ProjectsInfo.module.scss'
import { motion } from 'framer-motion'
import { ProjectsPopup } from '@/modules/portfolio/components/portfolioProjects/projectsPopup/ProjectsPopup'
import miratal1 from '@/public/images/portfolioSliderInPopup/miratal/miratal1.jpg'
import miratal2 from '@/public/images/portfolioSliderInPopup/miratal/miratal2.jpg'
import miratal3 from '@/public/images/portfolioSliderInPopup/miratal/miratal3.jpg'
import miratal4 from '@/public/images/portfolioSliderInPopup/miratal/miratal4.jpg'
import miratal5 from '@/public/images/portfolioSliderInPopup/miratal/miratal5.jpg'
import miratal6 from '@/public/images/portfolioSliderInPopup/miratal/miratal6.jpg'
import miratal7 from '@/public/images/portfolioSliderInPopup/miratal/miratal7.jpg'
import miratal8 from '@/public/images/portfolioSliderInPopup/miratal/miratal8.jpg'
import { animation } from '@/constants/animation'

type Props = {
  setOpenProjectPopup: (openProject: number) => void
}

export const Miratal = ({ setOpenProjectPopup }: Props) => {
  return (
    <ProjectsPopup
      title={'Miratal'}
      subtitle={'.......'}
      images={[miratal1, miratal2, miratal3, miratal4, miratal5, miratal6, miratal7, miratal8]}
      link={'https://domen.ru/'}
      setOpenProjectPopup={setOpenProjectPopup}
      isSquarePhotos
    >
      <motion.div
        className={styles.desc}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={animation.fadeBottomAnimation} custom={0.6}>
          СОписание проекта
        </motion.p>
      </motion.div>
    </ProjectsPopup>
  )
}
