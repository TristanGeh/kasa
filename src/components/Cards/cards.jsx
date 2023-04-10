import housing from '../../logements.json'
import './cards.scss'

function Cards() {
    return (
        <article>
            {housing.map((item) =>(
                <div key ={item.id} className='cards'>
                    <img src={item.cover} alt="Appartement en location" />
                    <h2>{item.title}</h2>
                </div>
            ))}
        </article>
    )
}

export default Cards