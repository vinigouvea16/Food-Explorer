import { useEffect, useState } from 'react'
import { GoFilter, GoSignOut } from 'react-icons/go'
import { PiReceiptBold } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { Input } from '../Input'
import { Brand, Container, Logout, Menu, Order } from './style'

export function Header({ onOpenMenu }) {
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
      // console.log(ingredientsResponse.data)
      const dishesResponse = await api.get('/dishes')
      setDishes(dishesResponse.data)
      // console.log(dishesResponse.data)
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
        <Menu onClick={onOpenMenu}>
          <GoFilter />
        </Menu>
        <Brand onClick={handleHome} />
        <Input
          placeholder="Busque por pratos ou ingredientes"
          hasicon
          onChange={(e) => setSearch(e.target.value)}
        />
        <OrderButton />
        <Logout onClick={handleLogOut}>
          <GoSignOut />
        </Logout>
      </div>
    </Container>
  )
}

function OrderButton() {
  return (
    <>
      <Button hasicon title="Meus Pedidos" />
      <Order hasicon title="Pedidos">
        <span>{4}</span>
        <PiReceiptBold />
      </Order>
    </>
  )
}
