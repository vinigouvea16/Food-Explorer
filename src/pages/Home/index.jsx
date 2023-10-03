import { Container, Content } from './style'
// import {Button} from '../../components/Button'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import homeimg from '../../../assets/homeimg.png'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { MyCarousel } from '../../components/MyCarousel'
import { Section } from '../../components/Section'
import { SideMenu } from '../../components/SideMenu'
import { useDebounce } from '../../hooks/useDebounce'
import { api } from '../../services/api'
function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  const params = useParams()
  const [search, setSearch] = useState('')
  const searchDebounce = useDebounce(search, 300)
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
  function handleSearchChange(value) {
    setSearch(value)
  }

  const fetchData = useCallback(async (search) => {
    try {
      const response = await api.get(`/dishes/`, {
        params: {
          name: search,
          // ingredients: search,
        },
      })

      setData(response.data)
      categoryFilter(response.data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    fetchData(searchDebounce)
  }, [fetchData, searchDebounce])

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header
        search={search}
        onSearch={handleSearchChange}
        onOpenMenu={() => setMenuIsOpen(true)}
      />
      <Content>
        <div className="mainImg">
          <img src={homeimg} alt="" />
          <hgroup>
            <h2>Sabores Inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </hgroup>
        </div>
        {/* {data.map((dish) => ( */}
        <Section
        // key={String(dish.id)} data={dish}
        >
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
        </Section>
        {/* ))} */}
      </Content>
      <Footer />
    </Container>
  )
}

export default Home
