import { Link } from 'react-router-dom'
import housing from '../../logements.json'
import './cards.scss'

function Cards() {
  return (
    <article>
      {housing.map((item) => (
        <div key={item.id} className="cards">
          <Link to={`/housing/${item.id}`}>
            <img src={item.cover} alt="Appartement en location" />
            <h2>{item.title}</h2>
          </Link>
        </div>
      ))}
    </article>
  )
}

export default Cards
