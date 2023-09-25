import { Route, Routes } from 'react-router-dom'

import Dish from '../pages/Dish'
import DishEdit from '../pages/DishEdit'
import Home from '../pages/Home'
import NewDish from '../pages/NewDish'
import OrderHistory from '../pages/OrderHistory'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/history" element={<OrderHistory />} />
      <Route path="/edit/:id" element={<DishEdit />} />
      <Route path="/dishes/:id" element={<Dish />} />
    </Routes>
  )
}
export default AppRoutes
