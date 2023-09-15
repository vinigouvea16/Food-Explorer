import {Routes, Route} from 'react-router-dom'

import LogIn from '../pages/LogIn'
import SignUp from '../pages/SignUp'

function AuthRoutes(){
  return (
    <Routes>
      <Route path="/register" element={<SignUp/>} />
      <Route path="/" element={<LogIn/>} />
    </Routes>
  )
}
export default AuthRoutes