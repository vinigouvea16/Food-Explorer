import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { USER_ROLE } from '../utils/roles'
import AdminRoutes from './admin.routes'
import AuthRoutes from './auth.routes'
import CustomerRoutes from './customer.routes'
function Routes() {
  const { user } = useAuth()
  function AccessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />
      // case USER_ROLE.GUEST:
      //   return <GuestRoutes />;
      // default:
      //   return <GuestRoutes />;
    }
  }
  return (
    <BrowserRouter> {user ? <AccessRoute /> : <AuthRoutes />} </BrowserRouter>
  )
}

export default Routes
