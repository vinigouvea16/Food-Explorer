import { X } from '@phosphor-icons/react'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useDebounce } from '../../hooks/useDebounce'
import { api } from '../../services/api'
import { USER_ROLE } from '../../utils/roles'
import { Footer } from '../Footer'
import { Input } from '../Input'
import { Button, Container, Header, Nav, Title } from './style'

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  const navigate = useNavigate()
  const { logOut, user } = useAuth()
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const searchDebounce = useDebounce(search, 300)
  const [meals, setMeals] = useState([])
  const [desserts, setDesserts] = useState([])
  const [drinks, setDrinks] = useState([])

  function handleLogOut() {
    navigate('/')
    logOut()
  }
  function handleNewDish() {
    navigate(`/new`)
  }
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
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <Title>Menu</Title>
        {menuIsOpen && (
          <Button onClick={onCloseMenu}>
            <X />
          </Button>
        )}
      </Header>
      <Nav>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          hasicon
          search={search}
          onSearch={handleSearchChange}
          onChange={(e) => setSearch(e.target.value)}
        />
        {user.role === USER_ROLE.ADMIN && (
          <>
            <span onClick={handleNewDish}>Novo Prato</span>
          </>
        )}
        <span onClick={handleLogOut}>Sair</span>
      </Nav>
      <Footer />
    </Container>
  )
}
