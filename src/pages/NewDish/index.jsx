import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { InputCurrency } from '../../components/CurrencyInput'
import { Footer } from '../../components/Footer'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { InputDish } from '../../components/InputDish'
import { NewIngredient } from '../../components/NewIngredient'
import { Section } from '../../components/Section'
import { Select } from '../../components/Select'
import { SideMenu } from '../../components/SideMenu'
import { Textarea } from '../../components/Textarea'
import { api } from '../../services/api'
import { Container, Content, Form } from './style'

function NewDish() {
  const options = [
    { value: 'Refeições', label: 'Refeições' },
    { value: 'Sobremesas', label: 'Sobremesas' },
    { value: 'Bebidas', label: 'Bebidas' },
  ]
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState(0)
  const navigate = useNavigate()
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  function handleAddTag() {
    setIngredients((prevState) => [...prevState, newIngredient])
    setNewIngredient('')
  }
  function handleRemoveTag(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted),
    )
  }

  async function handleNewPlate() {
    if (!name) {
      return alert('Insira o nome do prato')
    }
    if (!description) {
      return alert('Insira descrição do prato')
    }
    if (!price) {
      return alert('Estipule o valor do prato')
    }
    if (!category) {
      return alert('Estipule uma categoria para o prato')
    }
    if (newIngredient) {
      return alert(
        'Parece que você esqueceu de adicionar um dos ingredientes, clique para adicionar, ou remova-o',
      )
    }

    try {
      const response = await api.post(
        '/dishes',
        {
          name,
          description,
          price,
          ingredients,
          category,
        },
        {},
      )
      console.log(response)
      if (dishFile) {
        const form = new FormData()
        form.append('plateimg', dishFile)
        await api.patch(`/dishes/plateimg/${response.data.dish_id}`, form)
      }

      alert('Prato cadastrado com sucesso!')
      navigate(-1)
    } catch (error) {
      console.error(error)
    }
  }

  const [dishFile, setDishFile] = useState(null)
  function handleDishImg(event) {
    const file = event.target.files[0]
    setDishFile(file)
  }

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <HeaderAdmin onOpenMenu={() => setMenuIsOpen(true)} />
      <Content>
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
        <header>
          <h1>Adicionar prato</h1>
        </header>

        <Form>
          <div className="threeInputs">
            <div className="label">
              <span>Imagem do prato</span>
              <label htmlFor="avatar">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.2929 0.292893C11.6834 -0.0976311 12.3166 -0.0976311 12.7071 0.292893L17.9571 5.54289C18.3476 5.93342 18.3476 6.56658 17.9571 6.95711C17.5666 7.34763 16.9334 7.34763 16.5429 6.95711L12 2.41421L7.45711 6.95711C7.06658 7.34763 6.43342 7.34763 6.04289 6.95711C5.65237 6.56658 5.65237 5.93342 6.04289 5.54289L11.2929 0.292893Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 1.49012e-08C12.5523 1.49012e-08 13 0.447715 13 1V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V1C11 0.447715 11.4477 1.49012e-08 12 1.49012e-08Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 14C1.55228 14 2 14.4477 2 15V22H22V15C22 14.4477 22.4477 14 23 14C23.5523 14 24 14.4477 24 15V22C24 22.5304 23.7893 23.0391 23.4142 23.4142C23.0391 23.7893 22.5304 24 22 24H2C1.46957 24 0.960861 23.7893 0.585787 23.4142C0.210714 23.0391 0 22.5304 0 22V15C0 14.4477 0.447715 14 1 14Z"
                    fill="white"
                  />
                </svg>
                <h4>Selecione Image</h4>
                <input type="file" id="avatar" onChange={handleDishImg} />
              </label>
            </div>
            <div className="label" id="name">
              <span>Nome</span>
              <InputDish
                placeholder="Ex.:Salada Ceasar"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="label">
              <span>Categoria</span>
              <Select
                options={options}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>

          <div className="twoInputs">
            <div className="tags">
              <span>Ingredientes</span>
              <Section>
                {ingredients.map((ingredient, index) => (
                  <NewIngredient
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveTag(ingredient)}
                  />
                ))}
                <NewIngredient
                  $isNew
                  placeholder="Adicionar"
                  onChange={(e) => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleAddTag}
                />
              </Section>
            </div>
            <div className="label">
              <span>Preços</span>
              <InputCurrency
                type="number"
                onValueChange={(value) => {
                  setPrice(value)
                }}
                value={price}
              />
            </div>
          </div>
          <div className="label">
            <span>Descrição</span>
            <Textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Button
            // loading
            title="Salvar Alterações"
            onClick={handleNewPlate}
          />
        </Form>
      </Content>
      <Footer />
    </Container>
  )
}

export default NewDish
