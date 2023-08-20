import styles from '../ProjectsInfo.module.scss'
import { motion } from 'framer-motion'
import { ProjectsPopup } from '@/modules/portfolio/components/portfolioProjects/projectsPopup/ProjectsPopup'
import todo1 from '@/public/images/portfolioSliderInPopup/todo/todo-1.jpg'
import { animation } from '@/constants/animation'

type Props = {
  setOpenProjectPopup: (openProject: number) => void
}

export const Todo = ({ setOpenProjectPopup }: Props) => {
  return (
    <ProjectsPopup
      title={'Todo'}
      subtitle={'App - React js'}
      images={[todo1]}
      technologies={['React js', 'Redux Toolkit', 'Redux-thunk', 'React Router', 'Material UI', 'Axios', 'Formik']}
      link={'https://todolist-fawn-seven.vercel.app/'}
      github={'https://github.com/fefelov-danil/todolist'}
      setOpenProjectPopup={setOpenProjectPopup}
    >
      <motion.div
        className={styles.desc}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={animation.fadeBottomAnimation} custom={0.6}>
          Приложение для планирования своего дня. Функционал: добавление, удаление, изменение статуса задач, сортировка
          по статусу задач. Все редьюсеры покрыты тестами. Реализована обработка и вывод ошибок, загрузка приложения
          (полная или частичная).
        </motion.p>
      </motion.div>
    </ProjectsPopup>
  )
}
