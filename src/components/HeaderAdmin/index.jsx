import { GoSignOut } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/auth'
import { Input } from '../Input'
import { Brand, Container, Logout } from './style'

export function HeaderAdmin() {
  const { logOut, user } = useAuth()
  const navigate = useNavigate()

  function handleNewDish() {
    navigate(`/new`)
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
        <Input placeholder="Busque por pratos ou ingredientes" hasIcon />
        <Button onClick={handleNewDish} title="Novo Prato" />
        <Logout onClick={handleLogOut}>
          <GoSignOut />
        </Logout>
      </div>
    </Container>
  )
}
