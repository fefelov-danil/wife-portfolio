import styles from '../ProjectsInfo.module.scss'
import { motion } from 'framer-motion'
import { ProjectsPopup } from '@/modules/portfolio/components/portfolioProjects/projectsPopup/ProjectsPopup'
import social1 from '@/public/images/portfolioSliderInPopup/inctagram/social1.jpg'
import social2 from '@/public/images/portfolioSliderInPopup/inctagram/social2.jpg'
import social3 from '@/public/images/portfolioSliderInPopup/inctagram/social3.jpg'
import social4 from '@/public/images/portfolioSliderInPopup/inctagram/social4.jpg'
import social5 from '@/public/images/portfolioSliderInPopup/inctagram/social5.jpg'
import { animation } from '@/constants/animation'

type Props = {
  setOpenProjectPopup: (openProject: number) => void
}

export const Inctagram = ({ setOpenProjectPopup }: Props) => {
  return (
    <ProjectsPopup
      title={'Inctagram'}
      subtitle={'App - Next js'}
      images={[social1, social2, social3, social4, social5]}
      technologies={['Next js', 'Redux Toolkit', 'RTK Query', 'Material UI', 'SASS']}
      link={'https://inctagram-m9ju.vercel.app/'}
      github={'https://github.com/INCTAGRAM/inctagram-front'}
      setOpenProjectPopup={setOpenProjectPopup}
    >
      <motion.div
        className={styles.desc}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={animation.fadeBottomAnimation} custom={0.6}>
          Стажировка IT Incubator. Над проектом работало 7 человек. 2 backend разработчика и 5 frontend.
        </motion.p>
        <motion.p variants={animation.fadeBottomAnimation} custom={0.65}>
          Опишу некоторые интересные задачи с которыми мы столкунулись:
        </motion.p>
        <ul>
          <motion.li variants={animation.fadeBottomAnimation} custom={0.7}>
            Infinity Scroll. Работает на подгрузке постов в профиле.
            <br />
            Реализовано на RTK Query. Новые порции запрашиваем по курсору (id), добавляем используя метод merge RTK
            Query. При добавлении поста в своем профиле не ревалидируем все посты, а добавляем только новый пост в кэш
            RTK Query. При удалении поста удаляем его из кэща после успешного завершения запроса.
          </motion.li>
          <motion.li variants={animation.fadeBottomAnimation} custom={0.75}>
            Кроппинг и наложение фильтров. Можно добавлять в один пост до 10 фото. Каждую можно приближать, менять
            соотношение сторон и накладывать фильтры. Кроппинг и добавление фильтров разбито на 2 шага. Пользователь
            может переключаться между шагами, листать картинки и видеть, что он уже сделал, чтобы продолжить
            редактирование. Для этого мы используем локальный стейт, а также Redux Toolkit.
          </motion.li>
          <motion.li variants={animation.fadeBottomAnimation} custom={0.8}>
            Регистрация через google и github. В случае если почта, которая у пользователя используется в google/github
            уже зарегистрирована в нашем приложении, то на эту почту придет ссылка по которой он может перейти и
            подтвердить merge.
          </motion.li>
          <motion.li variants={animation.fadeBottomAnimation} custom={0.85}>
            JWT token. Мы начинали делать на react query, использовали axios, с токенами работали через interceptors.
            Затем перешли на RTK Query, использовали функцию baseQueryWithReauth.
          </motion.li>
        </ul>
        <motion.p variants={animation.fadeBottomAnimation} custom={0.9}>
          Я перечислил то, с чем много работал, но есть функционал в работе над которым я участия не принимал.
        </motion.p>
      </motion.div>
    </ProjectsPopup>
  )
}
