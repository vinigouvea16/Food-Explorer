import { Container, Content } from './style'
// import {Button} from '../../components/Button'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { MyCarousel } from '../../components/MyCarousel'
import { api } from '../../services/api'

function Home() {
  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  const params = useParams()

  const [meals, setMeals] = useState([])
  const [desserts, setDesserts] = useState([])
  const [drinks, setDrinks] = useState([])

  function categoryFilter(data) {
    const meals = data.filter((dish) => dish.category === 'Refeições')
    const desserts = data.filter((dish) => dish.category === 'Sobremesas')
    const drinks = data.filter((dish) => dish.category === 'Bebidas')

    setMeals(meals)
    setDesserts(desserts)
    setDrinks(drinks)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/dishes/`)
        setData(response.data)
        categoryFilter(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  // Use the state variables within the component or in another useEffect callback.
  // Avoid using them immediately after setting them, as they may not be updated yet.
  useEffect(() => {
    // console.log(drinks)
    // console.log(desserts)
    // console.log(meals)
  }, [data])

  return (
    <Container>
      <Header />
      <Content>
        <div className="mainImg">
          <img src="/assets/homeimg.png" alt="" />
          <hgroup>
            <h2>Sabores Inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </hgroup>
        </div>

        <div className="headercarousel">
          <h1>Refeições</h1>
          {meals.length > 0 && <MyCarousel data={meals} />}
        </div>

        <div className="headercarousel">
          <h1>Sobremesas</h1>
          {desserts.length > 0 && <MyCarousel data={desserts} />}
        </div>

        <div className="headercarousel">
          <h1>Bebidas</h1>
          {drinks.length > 0 && <MyCarousel data={drinks} />}
        </div>
      </Content>
      <Footer />
    </Container>
  )
}

export default Home
