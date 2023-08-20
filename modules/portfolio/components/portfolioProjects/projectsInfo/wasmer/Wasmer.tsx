import styles from '../ProjectsInfo.module.scss'
import { motion } from 'framer-motion'
import { ProjectsPopup } from '@/modules/portfolio/components/portfolioProjects/projectsPopup/ProjectsPopup'
import wasmer1 from '@/public/images/portfolioSliderInPopup/wasmer/wasmer1.jpg'
import wasmer2 from '@/public/images/portfolioSliderInPopup/wasmer/wasmer2.jpg'
import wasmer3 from '@/public/images/portfolioSliderInPopup/wasmer/wasmer3.jpg'
import wasmer4 from '@/public/images/portfolioSliderInPopup/wasmer/wasmer4.jpg'
import wasmer5 from '@/public/images/portfolioSliderInPopup/wasmer/wasmer5.jpg'
import wasmer6 from '@/public/images/portfolioSliderInPopup/wasmer/wasmer6.jpg'
import { animation } from '@/constants/animation'

type Props = {
  setOpenProjectPopup: (openProject: number) => void
}

export const Wasmer = ({ setOpenProjectPopup }: Props) => {
  return (
    <ProjectsPopup
      title={'Wasmer'}
      subtitle={'Site - WordPress'}
      images={[wasmer1, wasmer2, wasmer3, wasmer4, wasmer5, wasmer6]}
      link={'https://wasmer-falc.ru/'}
      setOpenProjectPopup={setOpenProjectPopup}
    >
      <motion.div
        className={styles.desc}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={animation.fadeBottomAnimation} custom={0.6}>
          Сайт по продаже кликфальца. Создавался весной 2023 года. Дизайн разрабатывал я сам. Хоть я уже и не занимался
          разработкой сайтов, но это был заказ от родствеенников жены. Одной из важных задач было простое взаимодействие
          с сайтом. Для этого было создано большое количество произвольный полей, благодаря которым в админке очень
          удобно всем управлять. Плюс я записал видеоинструкции в которых рассказал как работать с сайтом.
        </motion.p>
      </motion.div>
    </ProjectsPopup>
  )
}
