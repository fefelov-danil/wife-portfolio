'use client'
import styles from './Experience.module.scss'
import IcomoonReact from 'icomoon-react'
import iconSet from '@/assets/icons/selection.json'
import bg from '@/public/images/background/shattered.png'
import { motion } from 'framer-motion'
import { animation } from '@/constants/animation'
import Link from 'next/link'

export const Experience = () => {
  return (
    <div className={styles.experience}>
      <div className={styles.experienceBg} style={{ background: `url(${bg.src})` }}></div>
      <motion.div initial={'hidden'} whileInView={'visible'} viewport={{ once: true, amount: 0.1 }}>
        <motion.h1 variants={animation.fadeAndScaleAnimation}>опыт работы</motion.h1>
      </motion.div>
      <div className={styles.segments}>
        <motion.div
          className={styles.segment}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className={styles.segmentText} variants={animation.fadeBottomWithScaleAnimation} custom={0.1}>
            <p className={styles.yearsInside}>Июнь 2022 - Июль 2023</p>
            <p className={styles.text}>
              <b>Компания UR. - Front-end разработчик.</b>
              <br />В компании работал над двумя приложениями:
              <br />
              1. Сервис создания шаблонных договоров. Есть несколько шаблонов, каждому на фронте соответствует таблица.
              Пользователь в таблицах добавляет строки и заполняет их. Затем нажимает скачать, формируется архив с
              договорами.
              <br />
              Технологии на фронте: React, TypeScript, Redux Toolkit, Material UI.
              <br />
              2. CRM для стоматологий. Основной функционал: база пациентов и медицинские карты для каждого, зубная
              формула (для сохранения информации после осмотра), интеграция с сайтом стоматологии для онлайн записи.
              <br />
              Технологии на фронте: React, TypeScript, RTK Query, Material UI.
            </p>
          </motion.div>
          <p className={styles.segmentIcon}>
            <motion.span variants={animation.fadeAndScaleAnimation} custom={0.1}>
              <IcomoonReact iconSet={iconSet} color={'#fff'} icon={'calendar'} size={20} />
            </motion.span>
          </p>
          <motion.p className={styles.segmentYear} variants={animation.fadeAndScaleAnimation} custom={0.1}>
            <span>2022</span>
          </motion.p>
        </motion.div>
        <motion.div
          className={styles.segment}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className={styles.segmentText} variants={animation.fadeBottomWithScaleAnimation} custom={0.1}>
            <p className={styles.yearsInside}>Октябрь 2021 - Июнь 2022</p>
            <p className={styles.text}>
              <b>Обучение (Front-end developer)</b>.<br />В процессе обучения я написал много несложных приложений, а
              также 3 крупных:
              <br />
              <b>1.</b> Клон инстаграма.Работали в команде из 7 человек. Реализовали infinity Scroll, сделали кроппинг и
              фильтры для фото, настроили регистрацию google и github.
              <br />
              <b>2.</b> Обучение по карточкам. Реализована сортировка, поиск, фильтрация, пагинация, используется
              useDebounce. Регистрация и восстановление пароля через почту по токену.
              <br />
              <b>3.</b> Приложение для планирования своего дня. Реализовано добавление, удаление, изменение статуса
              задач, сортировка по статусу задач.
            </p>
          </motion.div>
          <p className={styles.segmentIcon}>
            <motion.span variants={animation.fadeAndScaleAnimation} custom={0.1}>
              <IcomoonReact iconSet={iconSet} color={'#fff'} icon={'calendar'} size={20} />
            </motion.span>
          </p>
          <motion.p className={styles.segmentYear} variants={animation.fadeAndScaleAnimation} custom={0.1}>
            <span>2021</span>
          </motion.p>
        </motion.div>
        <motion.div
          className={styles.segment}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className={styles.segmentText} variants={animation.fadeBottomWithScaleAnimation} custom={0.1}>
            <p className={styles.yearsInside}>Февраль 2016 - июнь 2022</p>
            <p className={styles.text}>
              <b>Freelance - создание сайтов.</b>
              <br />6 лет я занимался созданием сайтов. Имею очень большой опыт верстки. Лендинги, многостраничники,
              интернет-магазины. Движок использовал WordPress и October CMS. Многие из моих клиентов сотрудничали со
              мной по несколько лет. Ссылки на некоторые мои сайты:{' '}
              <Link href={'https://inkomprime.ru/'} target={'_blank'}>
                inkomprime.ru
              </Link>
              ,{' '}
              <Link href={'https://wasmer-falc.ru/'} target={'_blank'}>
                wasmer-falc.ru
              </Link>
              ,{' '}
              <Link href={'https://ishop124.ru/'} target={'_blank'}>
                ishop124.ru
              </Link>
              ,{' '}
              <Link href={'https://avtobiznes24.ru/'} target={'_blank'}>
                avtobiznes24.ru
              </Link>
              ,{' '}
              <Link href={'https://krastehnadzor.ru/'} target={'_blank'}>
                krastehnadzor.ru
              </Link>
              ,{' '}
              <Link href={'https://кавказмаркет.рф/'} target={'_blank'}>
                кавказмаркет.рф
              </Link>
              ,{' '}
              <Link href={'https://выкупавто124.рф/'} target={'_blank'}>
                выкупавто124.рф
              </Link>
            </p>
          </motion.div>
          <p className={styles.segmentIcon}>
            <motion.span variants={animation.fadeAndScaleAnimation} custom={0.1}>
              <IcomoonReact iconSet={iconSet} color={'#fff'} icon={'calendar'} size={20} />
            </motion.span>
          </p>
          <motion.p className={styles.segmentYear} variants={animation.fadeAndScaleAnimation} custom={0.1}>
            <span>2016</span>
          </motion.p>
        </motion.div>
        <motion.div
          className={styles.segment}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className={styles.segmentText} variants={animation.fadeBottomWithScaleAnimation} custom={0.1}>
            <p className={styles.yearsInside}>Декабрь 2013 - Январь 2016</p>
            <p className={styles.text}>
              <b>SEO и контекстная реклама</b>. Почти 2 года я занимался продвижением сайтов, сначала это была настройка
              контекстной рекламы, затем SEO продвижение сайтов. За это время успел поработать в компании как SEO
              специалист, но больше работал напрямую с клиентами.
            </p>
          </motion.div>
          <p className={styles.segmentIcon}>
            <motion.span variants={animation.fadeAndScaleAnimation} custom={0.1}>
              <IcomoonReact iconSet={iconSet} color={'#fff'} icon={'calendar'} size={20} />
            </motion.span>
          </p>
          <motion.p className={styles.segmentYear} variants={animation.fadeAndScaleAnimation} custom={0.1}>
            <span>2013</span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
