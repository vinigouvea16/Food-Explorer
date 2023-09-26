import { Route, Routes } from 'react-router-dom'

import Dish from '../pages/Dish'
import DishAdmin from '../pages/DishAdmin'
import DishEdit from '../pages/DishEdit'
import HomeAdmin from '../pages/HomeAdmin'
import NewDish from '../pages/NewDish'

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/edit/:id" element={<DishEdit />} />
      <Route path="/dishes/:id" element={<DishAdmin />} />
      <Route path="/dishes/:id" element={<Dish />} />
    </Routes>
  )
}
export default AdminRoutes
