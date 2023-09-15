import { BrowserRouter } from "react-router-dom";
import AppRoutes  from "./app.routes";
import AuthRoutes from "./auth.routes";

function Routes(){
  <BrowserRouter>
    {/* <AuthRoutes /> */}
    <AppRoutes />
  </BrowserRouter>
}

export default Routes