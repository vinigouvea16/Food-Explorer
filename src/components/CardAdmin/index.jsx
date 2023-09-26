import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { Container, Pencil } from './style'
export function CardAdmin({
  title,
  description,
  price,
  id,
  category,
  image,
  ...rest
}) {
  const [data, setData] = useState(null)
  const params = useParams()

  const navigate = useNavigate()
  function handleDish(id) {
    navigate(`/dishes/${id}`)
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
      <Pencil onClick={() => handleDish(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="27"
          viewBox="0 0 26 27"
          fill="none"
        >
          <path
            d="M13.7514 5.53201L21.1896 12.9703M7.99997 25.7217H2.06262C1.7808 25.7217 1.51052 25.6097 1.31124 25.4104C1.11196 25.2112 1.00001 24.9409 1.00001 24.6591V18.7217C0.999523 18.5837 1.02626 18.447 1.07868 18.3194C1.1311 18.1917 1.20818 18.0757 1.30551 17.9779L17.2447 2.03869C17.3436 1.93829 17.4614 1.85855 17.5914 1.80413C17.7214 1.74971 17.8609 1.72168 18.0018 1.72168C18.1427 1.72168 18.2822 1.74971 18.4122 1.80413C18.5422 1.85855 18.66 1.93829 18.7589 2.03869L24.683 7.96275C24.7834 8.06163 24.8631 8.17949 24.9175 8.30947C24.972 8.43945 25 8.57895 25 8.71987C25 8.86078 24.972 9.00029 24.9175 9.13027C24.8631 9.26025 24.7834 9.3781 24.683 9.47698L8.7438 25.4162C8.64599 25.5135 8.52994 25.5906 8.40231 25.643C8.27467 25.6954 8.13795 25.7222 7.99997 25.7217Z"
            stroke="#E1E1E6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Pencil>
      <img src={`${api.defaults.baseURL}/files/${image}`} alt="" />
      <h4>{title} &gt; </h4>
      <p> {description}</p>
      <h5>R$ {price}</h5>
    </Container>
  )
}
