/* eslint-disable react/react-in-jsx-scope */
import Banner from '../../components/Banner/banner'
import Collapse from '../../components/Collapse/collapse'
import aboutData from './collapseContent.json'
import PageTitle from '../../components/Title/title'
import arrow from '../../assets/arrow.png'
import AboutImg from '../../assets/footer-backgroung.png'

function About() {
  return (
    <main>
      <PageTitle title="À Propos" />
      <Banner src={AboutImg} alt="Montagne traversée par une rivière" />
      <Collapse contentType="about" data={aboutData} arrow={arrow} />
    </main>
  )
}

export default About
