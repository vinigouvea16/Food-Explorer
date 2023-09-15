import {Container, Content} from "./style"
// import {Button} from '../../components/Button'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import {Card} from '../../components/Card'
import { MyCarousel } from "../../components/Splider"


function Details() {

  return (
    <Container>
      <Header />
      <Content>
        <div class="mainImg">
      <img src="/assets/homeimg.png" alt="" />
        <hgroup>
          <h2>Sabores Inegualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </hgroup>
        </div>
    

        <div className="headercarousel">
          <h1>Refeições</h1>
          <MyCarousel 
          />
        </div>

      <div className="headercarousel">
          <h1>Sobremesas</h1>
         <MyCarousel 
         />
        </div>

      <div className="headercarousel">
        <h1>Bebidas</h1>
        <MyCarousel 
        />
      </div>
      </Content>
      <Footer />
    </Container>
  )
}

export default Details
