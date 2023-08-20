import { DependencyList, useEffect } from 'react'

export const useHangEventsOnDocument = (
  handleMouseDown: (e: MouseEvent) => void,
  handleMouseMove: (e: MouseEvent) => void,
  handleMouseUp: (e: MouseEvent) => void,
  handleScroll: (e: WheelEvent) => void,
  deps?: DependencyList,
  disableEvents?: boolean
) => {
  useEffect(() => {
    if (disableEvents) return

    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('wheel', handleScroll)

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('wheel', handleScroll)
    }
  }, deps)
}
