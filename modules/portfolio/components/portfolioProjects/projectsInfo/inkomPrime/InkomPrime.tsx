import styles from '../ProjectsInfo.module.scss'
import { motion } from 'framer-motion'
import { ProjectsPopup } from '@/modules/portfolio/components/portfolioProjects/projectsPopup/ProjectsPopup'
import inkomprime1 from '@/public/images/portfolioSliderInPopup/inkomprime/inkomPrime2.jpg'
import inkomprime2 from '@/public/images/portfolioSliderInPopup/inkomprime/inkomPrime3.jpg'
import inkomprime3 from '@/public/images/portfolioSliderInPopup/inkomprime/inkomPrime4.jpg'
import inkomprime4 from '@/public/images/portfolioSliderInPopup/inkomprime/inkomPrime5.jpg'
import inkomprime5 from '@/public/images/portfolioSliderInPopup/inkomprime/inkomPrime6.jpg'
import { animation } from '@/constants/animation'

type Props = {
  setOpenProjectPopup: (openProject: number) => void
}

export const InkomPrime = ({ setOpenProjectPopup }: Props) => {
  return (
    <ProjectsPopup
      title={'InkomPrime'}
      subtitle={'Site - October CMS'}
      images={[inkomprime1, inkomprime2, inkomprime3, inkomprime4, inkomprime5]}
      link={'https://inkomprime.ru/'}
      setOpenProjectPopup={setOpenProjectPopup}
    >
      <motion.div
        className={styles.desc}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={animation.fadeBottomAnimation} custom={0.6}>
          Сайт бухгалтерской компании. Работу делал под ключ, дизайн тоже мой.
          <br />
          Это мой самый первый клиент, сотрудничали 6 лет. Сделал для них несколько сайтов, опишу последний.
          <br />
          На сайте есть выбор города, для каждого на сервере создана отдельная папка. В папках есть файлы с переменными,
          где хранятся все контактные данные, цены и название города в разных падежах. Благодаря этим переменным все
          блоки на сайте универсальные и в разных городах используются только ссылки на них, а вся уникальная информация
          берется из переменных.
        </motion.p>
      </motion.div>
    </ProjectsPopup>
  )
}
