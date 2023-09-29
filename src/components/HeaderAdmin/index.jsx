import { GoFilter, GoSignOut } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/auth'
import { Input } from '../Input'
import { Brand, Container, Logout, Menu } from './style'

export function HeaderAdmin() {
  const { logOut, user } = useAuth()
  const navigate = useNavigate()

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
        <Menu>
          <GoFilter />
        </Menu>
        <Brand onClick={handleHome} />
        <Input placeholder="Busque por pratos ou ingredientes" hasicon />
        <OrderButton />
        <Logout onClick={handleLogOut}>
          <GoSignOut />
        </Logout>
      </div>
    </Container>
  )
}

function OrderButton() {
  function handleNewDish() {
    navigate(`/new`)
  }
  const navigate = useNavigate()
  return (
    <>
      <Button title="Novo Prato" onClick={handleNewDish} />
      {/* <Order hasIcon title="Pedidos">
        <span>{4}</span>
        <PiReceiptBold />
      </Order> */}
    </>
  )
}
