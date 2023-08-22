import styles from './CarouselItem.module.scss'
import Image, { StaticImageData } from 'next/image'
import React, { CSSProperties, useEffect, useState } from 'react'
import IcomoonReact from 'icomoon-react'
import iconSet from '@/assets/icons/selection.json'

type Props = {
  amountItems: number
  index: number
  active: number
  setActive: (active: number) => void
  setOpenProjectPopup: (project: number) => void
  subtitle: string
  title: string
  num: string
  img: StaticImageData
  disabledOnclick: boolean
  setMouseIsDown: (mouseIsDown: boolean) => void
}

export const CarouselItem = ({
  amountItems,
  index,
  active,
  setActive,
  setOpenProjectPopup,
  subtitle,
  title,
  num,
  img,
  disabledOnclick,
  setMouseIsDown,
}: Props) => {
  const [styleActive, setStyleActive] = useState<CSSProperties>({
    '--active': 0,
  } as CSSProperties)

  useEffect(() => {
    setStyleActive({
      '--active': (index - active) / amountItems,
    } as CSSProperties)
  }, [active])

  const styleIndex = { '--index': 4 - Math.abs(index - active) } as CSSProperties
  const styleAmountItems = { '--amountItems': amountItems } as CSSProperties

  const changeActiveHandler = () => {
    if (disabledOnclick) return
    setActive(index)
    setMouseIsDown(false)
  }

  const openProjectHandler = () => {
    // if (!active) return
    setOpenProjectPopup(active)
  }

  const finalClassName = active === index ? `${styles.carouselItem} ${styles.active}` : styles.carouselItem

  return (
    <div
      className={finalClassName}
      onMouseUp={changeActiveHandler}
      style={{ ...styleIndex, ...styleActive, ...styleAmountItems }}
    >
      <div className={styles.carouselBox} onClick={openProjectHandler}>
        <div className={styles.info}>
          <div className={styles.num}>{num}</div>
          <p className={styles.title}>
            {title} <IcomoonReact icon={'next'} iconSet={iconSet} color={'#fff'} size={22} />
          </p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <Image src={img} alt={title} />
      </div>
    </div>
  )
}
