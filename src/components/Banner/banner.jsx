import './banner.scss'

function Banner(props) {
  return (
    <section className="banner-section">
      <img src={props.src} alt={props.alt} />
      {props.showTitle ? <h1>Chez vous, partout et ailleurs</h1> : null}
    </section>
  )
}

export default Banner
