import bannerimg from '../../assets/home-title.png'
import './banner.scss'

function Banner() {
    return (
        <section>
            <img src={bannerimg} alt="Falaise sur mer" />
            <h1>Chez vous, partout et ailleurs</h1>
        </section>
    )
}

export default Banner