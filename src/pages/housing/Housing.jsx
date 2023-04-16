import { useParams } from 'react-router-dom'
import SlideShow from '../../components/Caroussel/caroussel'
import Collapse from '../../components/Collapse/collapse'
import Info from '../../components/HousingInfos/infos'
import Error from '../../components/Error/error'
import PageTitle from '../../components/Title/title'
import logements from '../../logements.json'
import arrow from '../../assets/arrow.png'
import housingArrow from '../../assets/housing_arrow.png'

import "./housing.scss"

function Housing() {
  const { id } = useParams();
  const housing = logements.find((housing) => housing.id === id);

  if(!housing){
    return <Error />
  }

  return (
    <section className='housing-main'>
      <PageTitle title={`${housing.title} - Kasa`} />
      <SlideShow images={housing.pictures} arrow={housingArrow} title={housing.title} />
      <Info title={housing.title} location={housing.location} name={housing.host.name} picture={housing.host.picture} id={housing.id} tags={housing.tags} rating={housing.rating} />
      <Collapse contentType={["equipements", "description"]} data={housing} arrow={arrow} customClass="collapse-housing"/>
    </section>
  )
}

export default Housing
