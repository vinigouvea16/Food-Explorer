import {Container, Content} from "./style"
import {NavBar} from '../../components/NavBar'
import {Footer} from '../../components/Footer'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import CustomizedTables from "../../components/Table"

function OrderHistory() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(()=> {
    async function fetchDish(){
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
    }
    fetchDish();
  }, [params.id])
  return (
    <Container>
      <NavBar />
        {/* {
          data && */}
      {/* <main> */}

      <Content>
        <h1>Histórico de Pedidos</h1>
       <CustomizedTables />
      </Content>
      {/* </main> */}
        {/* } */}

      <Footer />
    </Container>
  )
}

export default OrderHistory
