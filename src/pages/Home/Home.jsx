import Banner from '../../components/Banner/banner'
import Cards from '../../components/Cards/cards'
import ImgHome from '../../assets/home-title.png'
import PageTitle from '../../components/Title/title'

function Home() {
  return (
    <main>
      <PageTitle title="Kasa"/>
      <Banner src={ImgHome} alt="Falaise au pied de la mer" showTitle={true} />
      <Cards />
    </main>
  )
}

export default Home