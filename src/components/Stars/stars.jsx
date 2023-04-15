import grey from '../../assets/grey_star.png'
import red from '../../assets/red_star.png'

function Stars({rating}) {
    const greyStarsNumber = 5 - rating
    const redStars = []
    const greyStars = []

    for (let i = 0 ; i < rating; i++) {
        redStars.push(<img key={i} src={red} alt='étoiles rouges' />)
    }

    for (let i = 0; i < greyStarsNumber; i++) {
        greyStars.push(<img key={i + rating} src={grey} alt="étoiles grises" />);
    }

    return(
        <div className='stars'>{redStars}{greyStars}</div>
    )

}

export default Stars