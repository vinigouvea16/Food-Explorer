import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { Button } from '../Button'
import { Container, Heart } from './style'
export function Card({
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
      <Heart>
        <svg
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z"
            stroke="#E1E1E6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Heart>
      <img
        src={`${api.defaults.baseURL}/files/${image}`}
        alt=""
        onClick={() => handleDish(id)}
      />
      <h4>{title} &gt; </h4>
      <p> {description}</p>
      <h5>R$ {price}</h5>
      <div className="divone">
        <svg
          width="50"
          height="24"
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
        <span> 01 </span>
        <svg
          width="50"
          height="24"
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
        <Button title="incluir" />
      </div>
    </Container>
  )
}
