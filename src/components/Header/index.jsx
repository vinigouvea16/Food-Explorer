import { useEffect, useState } from 'react'
import { GoSignOut } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { Input } from '../Input'
import { Brand, Container, Logout } from './style'

export function Header() {
  const { logOut, user } = useAuth()
  const navigate = useNavigate()
  function handleOrder() {
    navigate(`/order`)
  }
  function handleLogOut() {
    navigate('/')
    logOut()
  }

  function handleHome() {
    navigate('/')
  }
  const [search, setSearch] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [dishes, setDishes] = useState([])
  useEffect(() => {
    async function fetchData() {
      const ingredientsResponse = await api.get('/ingredients')
      setIngredients(ingredientsResponse.data)
      console.log(ingredientsResponse.data)
      const dishesResponse = await api.get('/dishes')
      setDishes(dishesResponse.data)
      console.log(dishesResponse.data)
    }
    fetchData()
  }, [])
  useEffect(() => {
    async function fetchDishes() {
      await api.get(`/dishes?name=${search}&ingredients=${search}`)
    }
    fetchDishes()
  }, [search])

  return (
    <Container>
      <div>
        <Brand onClick={handleHome} />
        <Input
          placeholder="Busque por pratos ou ingredientes"
          hasIcon
          // onChange={(e) => setSearch(e.target.value)}
        />
        <Button hasIcon title="Pedidos (0)" onClick={handleOrder} />
        <Logout onClick={handleLogOut}>
          <GoSignOut />
        </Logout>
      </div>
    </Container>
  )
}
