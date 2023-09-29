import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Ingredients } from '../../components/Tag'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { Container, Content } from './style'

function Dish() {
  const [data, setData] = useState(null)
  const params = useParams()

  const { dish, updateDish } = useAuth()

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

  // useEffect(() => {
  //   async function getData() {
  //     const { data } = await api.get(`/dishes/${params.id}`)
  //     setData(data)
  //   }
  //   getData()
  // }, [])

  return (
    <Container>
      <Header />
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
              <div className="divone">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.4707 12C3.4707 11.5858 3.80649 11.25 4.2207 11.25H20.7207C21.1349 11.25 21.4707 11.5858 21.4707 12C21.4707 12.4142 21.1349 12.75 20.7207 12.75H4.2207C3.80649 12.75 3.4707 12.4142 3.4707 12Z"
                    fill="white"
                  />
                </svg>
                <span>01</span>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.4707 12C3.4707 11.5858 3.80649 11.25 4.2207 11.25H20.7207C21.1349 11.25 21.4707 11.5858 21.4707 12C21.4707 12.4142 21.1349 12.75 20.7207 12.75H4.2207C3.80649 12.75 3.4707 12.4142 3.4707 12Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.4707 3C12.8849 3 13.2207 3.33579 13.2207 3.75V20.25C13.2207 20.6642 12.8849 21 12.4707 21C12.0565 21 11.7207 20.6642 11.7207 20.25V3.75C11.7207 3.33579 12.0565 3 12.4707 3Z"
                    fill="white"
                  />
                </svg>
                <Button hasicon title={`incluir ∙ ${data.price}`} />
              </div>
            </section>
          </Content>
        </main>
      )}

      <Footer />
    </Container>
  )
}

export default Dish
