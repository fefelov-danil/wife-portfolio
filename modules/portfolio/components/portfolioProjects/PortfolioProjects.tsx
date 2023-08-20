import { Inctagram } from '@/modules/portfolio/components/portfolioProjects/projectsInfo/inctagram/Inctagram'
import { Cards } from '@/modules/portfolio/components/portfolioProjects/projectsInfo/cards/Cards'
import { InkomPrime } from '@/modules/portfolio/components/portfolioProjects/projectsInfo/inkomPrime/InkomPrime'
import { Ishop } from '@/modules/portfolio/components/portfolioProjects/projectsInfo/ishop/Ishop'
import { Avtobiznes } from '@/modules/portfolio/components/portfolioProjects/projectsInfo/avtobiznes/Avtobiznes'
import { Wasmer } from '@/modules/portfolio/components/portfolioProjects/projectsInfo/wasmer/Wasmer'
import { Krastehnadzor } from '@/modules/portfolio/components/portfolioProjects/projectsInfo/krastehnadzor/Krastehnadzor'
import { Miratal } from '@/modules/portfolio/components/portfolioProjects/projectsInfo/miratal/Miratal'

type Props = {
  openProject: number
  setOpenProjectPopup: (openProject: number) => void
}

export const PortfolioProjects = ({ openProject, setOpenProjectPopup }: Props) => {
  return (
    <>
      {openProject === 0 && <Miratal setOpenProjectPopup={setOpenProjectPopup} />}
      {openProject === 1 && <Cards setOpenProjectPopup={setOpenProjectPopup} />}
      {openProject === 2 && <Inctagram setOpenProjectPopup={setOpenProjectPopup} />}
      {openProject === 3 && <InkomPrime setOpenProjectPopup={setOpenProjectPopup} />}
      {openProject === 4 && <Ishop setOpenProjectPopup={setOpenProjectPopup} />}
      {openProject === 5 && <Avtobiznes setOpenProjectPopup={setOpenProjectPopup} />}
      {openProject === 6 && <Wasmer setOpenProjectPopup={setOpenProjectPopup} />}
      {openProject === 7 && <Krastehnadzor setOpenProjectPopup={setOpenProjectPopup} />}
    </>
  )
}
