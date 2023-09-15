import {Container, Content} from "./style"
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import {Section} from '../../components/Section'
import {Ingredients} from '../../components/Tag'
import { Button } from "../../components/Button"

function Dish() {
  return (
    <Container>
      <Header />
      <main>

      <a href="#">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L11.4142 16L20.7071 25.2929C21.0976 25.6834 21.0976 26.3166 20.7071 26.7071C20.3166 27.0976 19.6834 27.0976 19.2929 26.7071L9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" fill="white"/>
        </svg>
        Voltar
      </a>
      <Content>
        <img src="/assets/ravanello.png" alt="" />
      <section>
        <h1>Salada Ravanello</h1>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
        <Section>
          <Ingredients />

        </Section>
        <div className="divone">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4707 12C3.4707 11.5858 3.80649 11.25 4.2207 11.25H20.7207C21.1349 11.25 21.4707 11.5858 21.4707 12C21.4707 12.4142 21.1349 12.75 20.7207 12.75H4.2207C3.80649 12.75 3.4707 12.4142 3.4707 12Z" fill="white"/>
        </svg>
          <span>01</span>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4707 12C3.4707 11.5858 3.80649 11.25 4.2207 11.25H20.7207C21.1349 11.25 21.4707 11.5858 21.4707 12C21.4707 12.4142 21.1349 12.75 20.7207 12.75H4.2207C3.80649 12.75 3.4707 12.4142 3.4707 12Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4707 3C12.8849 3 13.2207 3.33579 13.2207 3.75V20.25C13.2207 20.6642 12.8849 21 12.4707 21C12.0565 21 11.7207 20.6642 11.7207 20.25V3.75C11.7207 3.33579 12.0565 3 12.4707 3Z" fill="white"/>
          </svg>
        <Button 
          title="incluir ∙ R$ 25,00"
          />
          </div>
      </section>
      </Content>
      </main>
      <Footer />
    </Container>
  )
}

export default Dish
