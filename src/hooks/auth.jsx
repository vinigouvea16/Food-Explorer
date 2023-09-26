import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'
export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  async function logIn({ email, password }) {
    try {
      const response = await api.post(
        'sessions',
        { email, password },
        { withCredentials: true },
      )
      const { user } = response.data
      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))

      setData({ user })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível entrar.')
      }
    }
  }
  function logOut() {
    localStorage.removeItem('@foodexplorer:user')

    setData({})
  }

  async function updateDish({ dish, dishFile }) {
    try {
      if (dishFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('image', dishFile)
        const response = await api.patch('/dishes/plateimg', fileUploadForm)
        dish.image = response.data.image
      }
      await api.put('/dishes', dish)
      localStorage.setItem('@foodexplorer:dish', JSON.stringify(dish))
      setData({ dish, token: data.token })
      alert('prato atualizado')
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível atualizar o prato.')
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@foodexplorer:user')

    if (user) {
      setData({
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        logIn,
        logOut,
        updateDish,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }

