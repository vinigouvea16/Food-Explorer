import {Routes, Route} from 'react-router-dom'

import Home from '../pages/Home'
import NewDish from '../pages/NewDish'
import DishEdit from '../pages/DishEdit'
import Dish from '../pages/Dish'
import OrderHistory from '../pages/OrderHistory'

function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/new" element={<NewDish/>} />
      <Route path="/history" element={<OrderHistory/>} />
      <Route path="/edit" element={<DishEdit/>} />
      <Route path="/dishes/:id" element={<Dish/>} />
    </Routes>
  )
}
export default AppRoutes