import styles from '../ProjectsInfo.module.scss'
import { motion } from 'framer-motion'
import { ProjectsPopup } from '@/modules/portfolio/components/portfolioProjects/projectsPopup/ProjectsPopup'
import dr1 from '@/public/images/portfolioSliderInPopup/dr/dr1.jpg'
import dr2 from '@/public/images/portfolioSliderInPopup/dr/dr2.jpg'
import dr3 from '@/public/images/portfolioSliderInPopup/dr/dr3.jpg'
import dr4 from '@/public/images/portfolioSliderInPopup/dr/dr4.jpg'
import dr5 from '@/public/images/portfolioSliderInPopup/dr/dr5.jpg'
import dr6 from '@/public/images/portfolioSliderInPopup/dr/dr6.jpg'
import dr7 from '@/public/images/portfolioSliderInPopup/dr/dr7.jpg'
import dr8 from '@/public/images/portfolioSliderInPopup/dr/dr8.jpg'
import dr9 from '@/public/images/portfolioSliderInPopup/dr/dr9.jpg'
import { animation } from '@/constants/animation'

type Props = {
  setOpenProjectPopup: (openProject: number) => void
}

export const Dr = ({ setOpenProjectPopup }: Props) => {
  return (
    <ProjectsPopup
      title={'Dr'}
      subtitle={'.......'}
      images={[dr1, dr2, dr3, dr4, dr5, dr6, dr7, dr8, dr9]}
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
