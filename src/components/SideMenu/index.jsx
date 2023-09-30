import { X } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'
import { Footer } from '../Footer'
import { Input } from '../Input'
import { Button, Container, Header, Nav, Title } from './style'

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  const navigate = useNavigate()
  const { logOut, user } = useAuth()

  function handleLogOut() {
    navigate('/')
    logOut()
  }
  function handleNewDish() {
    navigate(`/new`)
  }
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
          // onChange={(e) => setSearch(e.target.value)}
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
