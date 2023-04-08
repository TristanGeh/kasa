import housing from '../../logements.json'

function Cards() {
    return (
        <article>
            {housing.map((item) =>(
                <div key ={item.id}>
                    <img src={item.cover} alt="Appartement en location" />
                    <h2>{item.title}</h2>
                </div>
            ))}
        </article>
    )
}

export default Cards