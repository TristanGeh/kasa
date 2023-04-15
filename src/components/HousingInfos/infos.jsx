import Tags from '../Tags/tags'
import Stars from '../Stars/stars';


function Info(props) {
    return (
      <section className="housing-info">
        <div className="housing-info_title">
          <h1>{props.title}</h1>
          <p>{props.location}</p>
        </div>
        <div className="housing-info_name">
          <p>{props.name}</p>
          <img src={props.picture} alt="Profil du loueur" />
        </div>
        <Tags id={props.id} tags={props.tags} />
        <Stars rating={props.rating}/>
      </section>
    );
}

export default Info