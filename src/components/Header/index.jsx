import { GoFilter, GoSignOut } from 'react-icons/go'
import { PiReceiptBold } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/auth'
import { Input } from '../Input'
import { Brand, Container, Logout, Menu, Order } from './style'

export function Header({ search, onSearch, onOpenMenu }) {
  const { logOut, user } = useAuth()
  const navigate = useNavigate()
  // function handleOrder() {
  //   navigate(`/order`)
  // }
  function handleLogOut() {
    navigate('/')
    logOut()
  }
  function handleHome() {
    navigate('/')
  }

  return (
    <Container>
      <Menu onClick={onOpenMenu}>
        <GoFilter />
      </Menu>
      <Brand onClick={handleHome} />
      <Input
        placeholder="Busque por pratos ou ingredientes"
        hasicon
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
      <OrderButton />
      <Logout onClick={handleLogOut}>
        <GoSignOut />
      </Logout>
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
