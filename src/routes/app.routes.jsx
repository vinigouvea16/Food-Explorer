import {Routes, Route} from 'react-router-dom'

import Details from '../pages/Details'
import NewDish from '../pages/NewDish'
import DishEdit from '../pages/DishEdit'
import Dish from '../pages/Dish'

function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Details/>} />
      <Route path="/new" element={<NewDish/>} />
      <Route path="/dishedit" element={<DishEdit/>} />
      <Route path="/dish" element={<Dish/>} />
    </Routes>
  )
}
export default AppRoutes