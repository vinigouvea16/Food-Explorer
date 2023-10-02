import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Section } from '../../components/Section'
import { SideMenu } from '../../components/SideMenu'
import { Ingredients } from '../../components/Tag'
import { api } from '../../services/api'
import { Container, Content } from './style'

function DishAdmin() {
  const [data, setData] = useState(null)
  const params = useParams()
  const navigate = useNavigate()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  function handleDishEdit() {
    navigate(`/edit/${params.id}`)
  }

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`)
        setData(response.data)
      } catch (error) {
        console.error('Error fetching dish data', error)
      }
    }
    fetchDish()
  }, [params.id])
  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <HeaderAdmin onOpenMenu={() => setMenuIsOpen(true)} />
      {data && (
        <main>
          <Link to="/">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L11.4142 16L20.7071 25.2929C21.0976 25.6834 21.0976 26.3166 20.7071 26.7071C20.3166 27.0976 19.6834 27.0976 19.2929 26.7071L9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z"
                fill="white"
              />
            </svg>
            Voltar
          </Link>
          <Content>
            <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="" />
            <section>
              <h1>{data.name}</h1>
              <p>{data.description}</p>
              {data.ingredients && (
                <Section>
                  {data.ingredients.map((ingredient) => (
                    <Ingredients
                      key={String(ingredient.id)}
                      title={ingredient.name}
                    />
                  ))}
                </Section>
              )}
              <div className="divOne">
                <Button title="Editar Prato" onClick={handleDishEdit} />
              </div>
            </section>
          </Content>
        </main>
      )}

      <Footer />
    </Container>
  )
}

export default DishAdmin
