import Banner from '../../components/Banner/banner'
import Collapse from '../../components/Collapse/collapse'
import aboutData from '../../components/Collapse/about.json'
import arrow from '../../assets/Vector.svg'
import AboutImg from '../../assets/footer-backgroung.png'

function About() {
    return (
        <main>
            <Banner src={AboutImg} alt="Montagne traversée par une rivière" />
            <Collapse contentType="about" data={aboutData} arrow={arrow} />
        </main>
    )
}

export default About