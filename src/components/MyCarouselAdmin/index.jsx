import { ArrowRightIcon } from '@radix-ui/react-icons'
import Splide from '@splidejs/splide'
import '@splidejs/splide/css'
import { useEffect } from 'react'
import { CardAdmin } from '../CardAdmin'
import { Container } from './style'

export function MyCarouselAdmin({ data, ...rest }) {
  const id = crypto.randomUUID()

  useEffect(() => {
    new Splide(`#splide${id}`, {
      autoWidth: true,
      pagination: false,
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
      // type: "loop",
      trimSpace: 'move',
      focus: 'center',
      updateOnMove: true,
    }).mount()
  }, [
    // data,
    id,
  ])
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
            <li className="splide__slide">
              <CardAdmin />
            </li>
            <li className="splide__slide">
              <CardAdmin />
            </li>
            <li className="splide__slide">
              <CardAdmin />
            </li>
            <li className="splide__slide">
              <CardAdmin />
            </li>
          </ul>
        </div>
      </section>
    </Container>
  )
}
