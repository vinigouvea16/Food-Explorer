import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { InputLogin } from '../../components/InputLogin'
import { api } from '../../services/api'
import { Background, Container, Form } from './style'

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }
    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar =(')
        }
      })
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
        <h1>food explorer</h1>
      </Background>

      <Form>
        <h1>Crie sua Conta</h1>
        <div className="label">
          <span>Seu nome</span>
          <InputLogin
            placeholder="Exemplo: Maria Luiza"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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

        <Button title="Criar conta" onClick={handleSignUp} />
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}
export default SignUp
