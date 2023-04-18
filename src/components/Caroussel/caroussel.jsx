import { useState } from 'react'
import './caroussel.scss'

function SlideShow({ images, arrow, title }) {
  const [current, setCurrent] = useState(0)
  const length = images.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const currentPoints = `${current + 1}/${length}`

  return (
    <section className="caroussel">
      {images.map((image, index) => {
        return (
          <div
            className={index === current ? 'slideActive' : 'slidePassive'}
            key={index}
          >
            {index === current && <img src={image} alt={title} />}
          </div>
        )
      })}
      {length > 1 && (
        <>
          <div className="prevNext">
            <button onClick={prevSlide}>
              <img src={arrow} alt="Previous" />
            </button>
            <button onClick={nextSlide}>
              <img src={arrow} alt="Next" />
            </button>
          </div>
          <p>{currentPoints}</p>
        </>
      )}
    </section>
  )
}

export default SlideShow
