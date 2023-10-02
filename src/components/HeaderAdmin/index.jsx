import { GoFilter, GoSignOut } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/auth'
import { Input } from '../Input'
import { Brand, Container, Logout, Menu } from './style'

export function HeaderAdmin({ search, onSearch, onOpenMenu }) {
  const { logOut } = useAuth()
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
      <Menu onClick={onOpenMenu}>
        <GoFilter />
      </Menu>
      <Brand onClick={handleHome} />
      <Input
        placeholder="Busque por pratos ou ingredientes"
        $hasicon
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
  function handleNewDish() {
    navigate(`/new`)
  }
  const navigate = useNavigate()
  return (
    <>
      <Button title="Novo Prato" onClick={handleNewDish} />
    </>
  )
}
