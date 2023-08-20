import styles from '../ProjectsInfo.module.scss'
import { motion } from 'framer-motion'
import { ProjectsPopup } from '@/modules/portfolio/components/portfolioProjects/projectsPopup/ProjectsPopup'
import cards1 from '@/public/images/portfolioSliderInPopup/cards/cards1.jpg'
import cards2 from '@/public/images/portfolioSliderInPopup/cards/cards2.jpg'
import cards3 from '@/public/images/portfolioSliderInPopup/cards/cards3.jpg'
import { animation } from '@/constants/animation'

type Props = {
  setOpenProjectPopup: (openProject: number) => void
}

export const Cards = ({ setOpenProjectPopup }: Props) => {
  return (
    <ProjectsPopup
      title={'Cards'}
      subtitle={'App - React js'}
      images={[cards1, cards2, cards3]}
      technologies={['React js', 'Redux', 'Redux-thunk', 'React Router', 'Material UI', 'Axios', 'Formik']}
      link={'https://incubator-friday.vercel.app/'}
      github={'https://github.com/fefelov-danil/incubator-friday'}
      setOpenProjectPopup={setOpenProjectPopup}
    >
      <motion.div
        className={styles.desc}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={animation.fadeBottomAnimation} custom={0.6}>
          Приложение для обучения. Создаем блоки вопросов, чтобы затем проверять свои знания по тем или иным темам. В
          проекте реализована сортировка, поиск, фильтрация, пагинация. Используется useDebounce. В url адрес через
          useSearchParams добавляются значения фильтров, чтобы не терять их при перезагрузке страницы. Реализована
          регистрация и восстановление пароля через почту по токену. Есть добавление картинок (конвертируются в base64).
        </motion.p>
      </motion.div>
    </ProjectsPopup>
  )
}
