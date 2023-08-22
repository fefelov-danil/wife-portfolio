import styles from '../ProjectsInfo.module.scss'
import { motion } from 'framer-motion'
import { ProjectsPopup } from '@/modules/portfolio/components/portfolioProjects/projectsPopup/ProjectsPopup'
import simplac1 from '@/public/images/portfolioSliderInPopup/simplac/simplac1.jpg'
import simplac2 from '@/public/images/portfolioSliderInPopup/simplac/simplac2.jpg'
import simplac3 from '@/public/images/portfolioSliderInPopup/simplac/simplac3.jpg'
import simplac4 from '@/public/images/portfolioSliderInPopup/simplac/simplac4.jpg'
import simplac5 from '@/public/images/portfolioSliderInPopup/simplac/simplac5.jpg'
import simplac6 from '@/public/images/portfolioSliderInPopup/simplac/simplac6.jpg'
import simplac7 from '@/public/images/portfolioSliderInPopup/simplac/simplac7.jpg'
import simplac8 from '@/public/images/portfolioSliderInPopup/simplac/simplac8.jpg'
import simplac9 from '@/public/images/portfolioSliderInPopup/simplac/simplac9.jpg'
import { animation } from '@/constants/animation'

type Props = {
  setOpenProjectPopup: (openProject: number) => void
}

export const Simplac = ({ setOpenProjectPopup }: Props) => {
  return (
    <ProjectsPopup
      title={'Simplac'}
      subtitle={'.......'}
      images={[simplac1, simplac2, simplac3, simplac4, simplac5, simplac6, simplac7, simplac8, simplac9]}
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
