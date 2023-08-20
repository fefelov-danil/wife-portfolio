'use client'
import styles from './About.module.scss'
import me from '@/public/images/me.png'
import lines1 from '@/public/images/background/lines1.png'
import { stringsForBg } from '@/modules/about/constants/bigStringForBg'
import { StringBg } from '@/modules/about/components/stringBg/StringBg'
import { motion } from 'framer-motion'
import Image from 'next/image'
import iconSet from '@/assets/icons/selection.json'
import IcomoonReact from 'icomoon-react'
import { skills } from '@/modules/about/constants/skills'
import { animation } from '@/constants/animation'

export const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.stringForBg}>
        <p style={{ backgroundImage: `url(${me.src})` }}>
          {stringsForBg.map((str, i) => (
            <StringBg key={i} str={str} />
          ))}
        </p>
      </div>
      <div className={styles.info}>
        <motion.div initial={'hidden'} whileInView={'visible'} viewport={{ once: true, amount: 0.1 }}>
          <motion.div variants={animation.fadeRightAnimation} className={styles.linesBg}>
            <Image src={lines1} alt={''} />
          </motion.div>
        </motion.div>
        <div className={styles.text}>
          <motion.div initial={'hidden'} whileInView={'visible'} viewport={{ once: true, amount: 0.1 }}>
            <motion.h1 variants={animation.fadeBottomAnimation}>
              <span>Фефелов Даниил</span>
              <br />
              front-end developer
            </motion.h1>
          </motion.div>
          <motion.ul
            className={styles.skills}
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.1 }}
          >
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                className={styles.skill}
                variants={animation.fadeBottomAnimation}
                custom={index * 0.1 + 0.15}
              >
                <IcomoonReact iconSet={iconSet} color={'#fff'} icon={skill.icon} size={40} />
                <br />
                {skill.name}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div initial={'hidden'} whileInView={'visible'} viewport={{ once: true, amount: 0.1 }}>
            <motion.p className={styles.subtitle} variants={animation.fadeBottomAnimation} custom={0.6}>
              Здравствуйте!
            </motion.p>
            <motion.p variants={animation.fadeBottomAnimation} custom={0.7}>
              Я опытный front-end разработчик. Создаю SPA используя React js и Next js, пишу на TypeScript.
            </motion.p>
            <motion.p variants={animation.fadeBottomAnimation} custom={0.8}>
              Работал в командах от 3х до 8ми человек на разных проектах, на каждом из которых получил много опыта.
            </motion.p>
            <motion.p variants={animation.fadeBottomAnimation} custom={0.9}>
              С 2016 по 2022 год занимался разработкой сайтов. Лендинги, многостраничники, интернет-магазины. Движок
              использовал WordPress и October CMS. Со многими клиентами сотрудничал по несколько лет.
            </motion.p>
            <motion.p variants={animation.fadeBottomAnimation} custom={1}>
              К работе отношусь ответственно, вникаю в задачу, для меня важен результат. Я рад, когда вижу положительную
              обратную связь.
              <br />
              Открыт к Вашим предложениям.
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          className={`${styles.linesBg} ${styles.linesBgBottom}`}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true }}
        >
          <motion.div variants={animation.fadeRightAnimation}>
            <Image src={lines1} alt={''} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
