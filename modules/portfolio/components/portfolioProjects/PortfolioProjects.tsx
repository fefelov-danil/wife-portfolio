import { Miratal } from '@/modules/portfolio/components/portfolioProjects/projectsInfo/miratal/Miratal'
import { Aroma } from '@/modules/portfolio/components/portfolioProjects/projectsInfo/aroma/Aroma'
import { Dr } from '@/modules/portfolio/components/portfolioProjects/projectsInfo/dr/Dr'
import { Simplac } from '@/modules/portfolio/components/portfolioProjects/projectsInfo/simplac/Simplac'

type Props = {
  openProject: number
  setOpenProjectPopup: (openProject: number) => void
}

export const PortfolioProjects = ({ openProject, setOpenProjectPopup }: Props) => {
  return (
    <>
      {openProject === 0 && <Miratal setOpenProjectPopup={setOpenProjectPopup} />}
      {openProject === 1 && <Aroma setOpenProjectPopup={setOpenProjectPopup} />}
      {openProject === 2 && <Dr setOpenProjectPopup={setOpenProjectPopup} />}
      {openProject === 3 && <Simplac setOpenProjectPopup={setOpenProjectPopup} />}
    </>
  )
}
