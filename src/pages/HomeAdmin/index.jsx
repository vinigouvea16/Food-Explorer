import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { MyCarouselAdmin } from '../../components/MyCarouselAdmin'
import { api } from '../../services/api'
import { Container, Content } from './style'

function Home() {
  const [data, setData] = useState([])
  // const [category, setCategory] = useState([])
  // const params = useParams()

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

  // useEffect(() => {}, [data])

  return (
    <Container>
      <HeaderAdmin />
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
          {meals.length > 0 && <MyCarouselAdmin data={meals} />}
        </div>

        <div className="headercarousel">
          <h1>Sobremesas</h1>
          {desserts.length > 0 && <MyCarouselAdmin data={desserts} />}
        </div>

        <div className="headercarousel">
          <h1>Bebidas</h1>
          {drinks.length > 0 && <MyCarouselAdmin data={drinks} />}
        </div>
      </Content>
      <Footer />
    </Container>
  )
}

export default Home
