import { ArrowRightIcon } from '@radix-ui/react-icons'
import Splide from '@splidejs/splide'
import '@splidejs/splide/css'
import { useEffect } from 'react'
import { CardAdmin } from '../CardAdmin'
import { Container } from './style'

export function MyCarouselAdmin({ data, category, ...rest }) {
  const id = crypto.randomUUID()
  useEffect(() => {
    new Splide(`#splide${id}`, {
      autoWidth: true,
      pagination: false,
      type: 'loop',
      drag: 'free',
      arrows: true,
      classes: {
        arrows: 'splide__arrows your-class-arrows',
        arrow: 'splide__arrow your-class-arrow',
        prev: 'splide__arrow--prev your-class-prev',
        next: 'splide__arrow--next your-class-next',
      },
      dragMinThreshold: {
        mouse: 8,
        touch: 10,
      },
      autoplay: 'pause',
      trimSpace: 'move',
      loop: true,
      focus: 'center',
      updateOnMove: true,
    }).mount()
  }, [data, id])
  return (
    <Container>
      <section
        className="splide"
        id={`splide${id}`}
        aria-label="Slide Container Example"
      >
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <ArrowRightIcon />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <ArrowRightIcon />
          </button>
        </div>
        <div className="splide__track">
          <ul className="splide__list">
            {data.length &&
              data.map((dish) => (
                <li key={dish.id} className="splide__slide">
                  <CardAdmin
                    key={dish.id}
                    title={dish.name}
                    description={dish.description}
                    price={dish.price}
                    image={dish.image}
                    id={dish.id}
                  />
                </li>
              ))}
          </ul>
        </div>
      </section>
    </Container>
  )
}
