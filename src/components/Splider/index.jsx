import '@splidejs/splide/css';
import Splide from '@splidejs/splide';
import { useEffect } from "react";
import {Container, Heart} from './style'
import { Button } from '../Button';
import {Card} from '../../components/Card'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { ArrowRightIcon } from '@radix-ui/react-icons';


export function MyCarousel ({
  data,
  ...rest
}) { 

  const id = crypto.randomUUID()

  useEffect(()=>{
  new Splide( `#splide${id}`, {
    autoWidth: true,
    pagination: false,
    drag   : 'free',
    arrows: true,
    classes: {
		arrows: 'splide__arrows your-class-arrows',
		arrow : 'splide__arrow your-class-arrow',
		prev  : 'splide__arrow--prev your-class-prev',
		next  : 'splide__arrow--next your-class-next',
  },
    dragMinThreshold: {
      mouse: 8,
      touch: 10},
    autoplay: 'pause',
    // type: "loop",
    trimSpace: 'move',
    focus  : 'center',
    updateOnMove: true,
    
  }).mount();

  }, [
    // data,
    id]);
  return(
    <Container> 
    <section class="splide" id={`splide${id}`} aria-label="Slide Container Example">
    <div class="splide__arrows">
		<button class="splide__arrow splide__arrow--prev">
			<ArrowRightIcon />
		</button>
		<button class="splide__arrow splide__arrow--next">
			<ArrowRightIcon />
		</button>
  </div>
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">
        <Card />
        </li>
        <li class="splide__slide">
         <Card />
        </li>
        <li class="splide__slide">
        <Card />
        </li>
        <li class="splide__slide">
        <Card />
        </li>
        <li class="splide__slide">
        <Card />
        </li>
        <li class="splide__slide">
        <Card />
        </li>
        <li class="splide__slide">
        <Card />
        </li>
      </ul>
    </div>
  </section>
    </Container>
  )
}