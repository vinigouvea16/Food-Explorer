import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { InputLogin } from '../../components/InputLogin'
import { useAuth } from '../../hooks/auth'
import { Background, Container, Form } from './style'

function LogIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { logIn } = useAuth()
  function handleLogIn() {
    logIn({ email, password })
  }
  return (
    <Container>
      <Background>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="48"
          viewBox="0 0 43 48"
          fill="none"
        >
          <path
            d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z"
            fill="#065E7C"
          />
        </svg>
        <h1> food explorer</h1>
      </Background>

      <Form>
        <h1>Faça login</h1>
        <div className="label">
          <span>Email</span>
          <InputLogin
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="label">
          <span>Senha</span>
          <InputLogin
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button title="Entrar" onClick={handleLogIn} />
        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  )
}
export default LogIn
