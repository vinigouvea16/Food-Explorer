import { useCallback, useEffect, useState } from 'react'
import homeimg from '../../../assets/homeimg.png'
import { Footer } from '../../components/Footer'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { MyCarouselAdmin } from '../../components/MyCarouselAdmin'
import { SideMenu } from '../../components/SideMenu'
import { useDebounce } from '../../hooks/useDebounce'
import { api } from '../../services/api'
import { Container, Content } from './style'
function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [data, setData] = useState([])
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
      <HeaderAdmin
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
