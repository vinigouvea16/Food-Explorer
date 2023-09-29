import { GoSignOut } from 'react-icons/go'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { Button } from '../Button'
import { Input } from '../Input'
import { Brand, Container, Logout } from './style'

export function NavBar() {
  const { logOut, user } = useAuth()
  const navigate = useNavigate()
  function handleOrder(id) {
    navigate(`/order/${id}`)
  }
  function handleLogOut() {
    navigate('/')
    logOut()
  }
  function handleHome() {
    navigate('/')
  }
  return (
    <Container>
      <div>
        <Brand onClick={handleHome} />
        <Input placeholder="Busque por pratos ou ingredientes" hasicon />
        <Link to="/favorites">
          <span>Meus favoritos</span>
        </Link>
        <Link to="history">
          <span>Histórico de pedidos</span>
        </Link>
        <Button hasicon title="Pedidos (0)" onClick={handleOrder} />
        <Logout onClick={handleLogOut}>
          <GoSignOut />
        </Logout>
      </div>
    </Container>
  )
}
