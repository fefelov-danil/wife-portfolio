'use client'
import styles from '../ProjectsPopup.module.scss'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'
import iconSet from '@/assets/icons/selection.json'
import IcomoonReact from 'icomoon-react'

type Props = {
  title: string
  images: StaticImageData[]
}

export const Slider = ({ title, images }: Props) => {
  const [activeImg, setActiveImg] = useState(0)
  const [mouseIsDown, setMouseIsDown] = useState(false)
  const [mouseDownXInPercent, setMouseDownXInPercent] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    sliderRef.current?.addEventListener('mousedown', handleMouseDown)
    sliderRef.current?.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      sliderRef.current?.removeEventListener('mousedown', handleMouseDown)
      sliderRef.current?.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [activeImg, mouseIsDown, mouseDownXInPercent])

  function handleMouseDown(e: MouseEvent) {
    setMouseIsDown(true)
    setMouseDownXInPercent(Math.floor((e.clientX / window.innerWidth) * 100))
  }

  function handleMouseMove(e: MouseEvent) {
    if (!mouseIsDown) return

    const currentXInPercent = Math.floor((e.clientX / window.innerWidth) * 100)

    if (mouseDownXInPercent - currentXInPercent < -12 && activeImg !== 0) {
      setActiveImg(activeImg - 1)
      setMouseDownXInPercent(currentXInPercent)
      setMouseIsDown(false)
    } else if (mouseDownXInPercent - currentXInPercent > 12 && activeImg !== images.length - 1) {
      setActiveImg(activeImg + 1)
      setMouseDownXInPercent(currentXInPercent)
      setMouseIsDown(false)
    }
  }

  function handleMouseUp() {
    setMouseIsDown(false)
  }

  const changeImageHandler = (isBack: boolean) => {
    isBack && setActiveImg(activeImg - 1)
    !isBack && setActiveImg(activeImg + 1)
  }

  return (
    <div ref={sliderRef} className={styles.gallery}>
      {activeImg > 0 && (
        <button className={`${styles.controlElements} ${styles.backEl}`} onClick={() => changeImageHandler(true)}>
          <IcomoonReact iconSet={iconSet} color={'#fff'} icon="arrow-left" size={25} />
        </button>
      )}
      {images.map((img, i) => {
        const position = activeImg * -100
        return <Image key={i} src={img} alt={title} style={{ left: `${position}%` }} unoptimized={true} />
      })}
      {activeImg < images.length - 1 && (
        <button className={`${styles.controlElements} ${styles.nextEl}`} onClick={() => changeImageHandler(false)}>
          <IcomoonReact iconSet={iconSet} color={'#fff'} icon="arrow-right" size={50} />
        </button>
      )}
    </div>
  )
}
