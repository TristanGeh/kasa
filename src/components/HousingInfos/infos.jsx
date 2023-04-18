import Tags from '../Tags/tags'
import Stars from '../Stars/stars'
import './infos.scss'

function Info(props) {
  return (
    <section className="housing-info">
      <div className="housing-info_title">
        <h1>{props.title}</h1>
        <p>{props.location}</p>
        <Tags id={props.id} tags={props.tags} />
      </div>
      <div className="housing-info_name">
        <div className="profil">
          <p>{props.name}</p>
          <img src={props.picture} alt="Profil du loueur" />
        </div>
        <Stars rating={props.rating} />
      </div>
    </section>
  )
}

export default Info
