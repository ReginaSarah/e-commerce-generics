import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Login from "./pages/Login"
import Usuarios from "./pages/Usuarios"
import Usuario from "./pages/Usuario"

const MainRoutes = () => {
   return(
       <Routes>
           <Route element = { <Home /> }  path="/" exact />
           <Route element = { <Login /> }  path="/login" />
           <Route element = { <Usuarios /> }  path="/usuarios" />
           <Route element = { <Usuario /> }  path="/usuario/:id" />
       </Routes>
   )
}

export default MainRoutes;