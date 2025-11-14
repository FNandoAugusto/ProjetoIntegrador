import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import RegisterPage2 from "../pages/RegisterPage/RegisterPage2";
import RegisterPage3 from "../pages/RegisterPage/RegisterPage3";
import LoginPage from "../pages/LoginPage/LoginPage";
import PublicRoutes from "./publicRoutes";
import ProtectedRoutes from "./protectedRoutes";
import Layout from "../Layout";
import CobrancaPage from "../pages/HomePages/CobrancaPage";
import Client from "../pages/HomePages/ClientPage";
import { HomePage } from "../components/HomePagesForm/HomePage";
import Charge from "../pages/HomePages/ClientCobrancaPage";
import { ClientPage } from "../components/HomePagesForm/ClientPageForm";
import ReservaHorario from "../pages/RegisterPage/RegisterPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route /* element={<PublicRoutes redirectTo="/clients" />} */>
        
        <Route element={<RegisterPage2 />} path="/calendario" />
        <Route element={<RegisterPage3 />} path="/register3" />
        <Route element={<LoginPage />} path="/" />
         <Route element={<HomePage />} path="/ambientes" />
         <Route element={<ReservaHorario />} path="/horariosDisponíveis" />
        <Route element={<CobrancaPage />} path="/Reservado" />
       
          
      </Route>

    </Routes>
  );
};
