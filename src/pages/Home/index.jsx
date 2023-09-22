import { Container, Content } from './style'
// import {Button} from '../../components/Button'
import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { MyCarousel } from '../../components/MyCarousel'
import { api } from '../../services/api'

function Home() {
  const [data, setData] = useState([])
  async function fetchData() {
    try {
      const response = await api.get(`/dishes/`)
      setData(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <div className="mainImg">
          <img src="/assets/homeimg.png" alt="" />
          <hgroup>
            <h2>Sabores Inegualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </hgroup>
        </div>

        <div className="headercarousel">
          <h1>Refeições</h1>
          {data.length && (
            <MyCarousel
              // category={refeições}
              data={data}
            />
          )}
        </div>

        <div className="headercarousel">
          <h1>Sobremesas</h1>
          {data.length && <MyCarousel data={data} />}
        </div>

        <div className="headercarousel">
          <h1>Bebidas</h1>
          {data.length && <MyCarousel data={data} />}
        </div>
      </Content>
      <Footer />
    </Container>
  )
}

export default Home
