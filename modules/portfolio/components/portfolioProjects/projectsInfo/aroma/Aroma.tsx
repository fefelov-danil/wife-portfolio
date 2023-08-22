import styles from '../ProjectsInfo.module.scss'
import { motion } from 'framer-motion'
import { ProjectsPopup } from '@/modules/portfolio/components/portfolioProjects/projectsPopup/ProjectsPopup'
import aroma1 from '@/public/images/portfolioSliderInPopup/aroma/aroma1.jpg'
import aroma2 from '@/public/images/portfolioSliderInPopup/aroma/aroma2.jpg'
import aroma3 from '@/public/images/portfolioSliderInPopup/aroma/aroma3.jpg'
import aroma4 from '@/public/images/portfolioSliderInPopup/aroma/aroma4.jpg'
import aroma5 from '@/public/images/portfolioSliderInPopup/aroma/aroma5.jpg'
import aroma6 from '@/public/images/portfolioSliderInPopup/aroma/aroma6.jpg'
import aroma7 from '@/public/images/portfolioSliderInPopup/aroma/aroma7.jpg'
import aroma8 from '@/public/images/portfolioSliderInPopup/aroma/aroma8.jpg'
import aroma9 from '@/public/images/portfolioSliderInPopup/aroma/aroma9.jpg'
import aroma10 from '@/public/images/portfolioSliderInPopup/aroma/aroma10.jpg'
import aroma11 from '@/public/images/portfolioSliderInPopup/aroma/aroma11.jpg'
import { animation } from '@/constants/animation'

type Props = {
  setOpenProjectPopup: (openProject: number) => void
}

export const Aroma = ({ setOpenProjectPopup }: Props) => {
  return (
    <ProjectsPopup
      title={'Aroma'}
      subtitle={'.......'}
      images={[aroma1, aroma2, aroma3, aroma4, aroma5, aroma6, aroma7, aroma8, aroma9, aroma10, aroma11]}
      link={'https://domen.ru/'}
      setOpenProjectPopup={setOpenProjectPopup}
    >
      <motion.div
        className={styles.desc}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={animation.fadeBottomAnimation} custom={0.6}>
          Описание проекта
        </motion.p>
      </motion.div>
    </ProjectsPopup>
  )
}
