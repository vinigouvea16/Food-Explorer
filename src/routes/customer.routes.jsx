import { Route, Routes } from 'react-router-dom'

import Dish from '../pages/Dish'
import Home from '../pages/Home'

function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishes/:id" element={<Dish />} />
    </Routes>
  )
}
export default CustomerRoutes
