import { Route, Routes } from 'react-router-dom'

import Dish from '../pages/Dish'
import Home from '../pages/Home'
import OrderHistory from '../pages/OrderHistory'
// import Favorites from '../pages/Favorites'

function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishes/:id" element={<Dish />} />
      <Route path="/history" element={<OrderHistory />} />
      {/* <Route path="/favorites" element={<Favorites />} /> */}
    </Routes>
  )
}
export default CustomerRoutes
