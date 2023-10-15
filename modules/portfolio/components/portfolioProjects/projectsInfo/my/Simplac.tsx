import styles from '../ProjectsInfo.module.scss'
import { motion } from 'framer-motion'
import { ProjectsPopup } from '@/modules/portfolio/components/portfolioProjects/projectsPopup/ProjectsPopup'
import my1 from '@/public/images/portfolioSliderInPopup/my/my-1.jpg'
import my2 from '@/public/images/portfolioSliderInPopup/my/my-2.jpg'
import my3 from '@/public/images/portfolioSliderInPopup/my/my-3.jpg'
import my4 from '@/public/images/portfolioSliderInPopup/my/my-4.jpg'
import my5 from '@/public/images/portfolioSliderInPopup/my/my-5.jpg'
import { animation } from '@/constants/animation'

type Props = {
  setOpenProjectPopup: (openProject: number) => void
}

export const My = ({ setOpenProjectPopup }: Props) => {
  return (
    <ProjectsPopup
      title={'My'}
      subtitle={'.......'}
      images={[my1, my2, my3, my4, my5]}
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
