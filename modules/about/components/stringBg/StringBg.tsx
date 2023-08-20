'use client'
import styles from '../About.module.scss'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

type Props = {
  str: string
}

export const StringBg = ({ str }: Props) => {
  const strRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const typed = new Typed(strRef.current, {
      strings: [str],
      typeSpeed: Math.floor(Math.random() * (85 - 40)) + 40,
      showCursor: false,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return <span ref={strRef} className={styles.strBg} />
}
