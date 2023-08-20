import styles from '../ProjectsInfo.module.scss'
import { motion } from 'framer-motion'
import { ProjectsPopup } from '@/modules/portfolio/components/portfolioProjects/projectsPopup/ProjectsPopup'
import avtobiznes1 from '@/public/images/portfolioSliderInPopup/avtobiznes/avtobiznes1.jpg'
import avtobiznes2 from '@/public/images/portfolioSliderInPopup/avtobiznes/avtobiznes2.jpg'
import avtobiznes3 from '@/public/images/portfolioSliderInPopup/avtobiznes/avtobiznes3.jpg'
import avtobiznes4 from '@/public/images/portfolioSliderInPopup/avtobiznes/avtobiznes4.jpg'
import avtobiznes5 from '@/public/images/portfolioSliderInPopup/avtobiznes/avtobiznes5.jpg'
import { animation } from '@/constants/animation'

type Props = {
  setOpenProjectPopup: (openProject: number) => void
}

export const Avtobiznes = ({ setOpenProjectPopup }: Props) => {
  return (
    <ProjectsPopup
      title={'Avtobiznes'}
      subtitle={'Site - October CMS'}
      images={[avtobiznes1, avtobiznes2, avtobiznes3, avtobiznes4, avtobiznes5]}
      link={'https://avtobiznes24.ru/'}
      setOpenProjectPopup={setOpenProjectPopup}
    >
      <motion.div
        className={styles.desc}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={animation.fadeBottomAnimation} custom={0.6}>
          Сайт компании по кузовному ремонту. Дизайн сайта мой.
        </motion.p>
      </motion.div>
    </ProjectsPopup>
  )
}
