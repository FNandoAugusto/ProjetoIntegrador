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

export const MainRoutes = () => {
  return (
    <Routes>
      <Route /* element={<PublicRoutes redirectTo="/clients" />} */>
        <Route element={<RegisterPage />} path="/" />
        <Route element={<RegisterPage2 />} path="/register2" />
        <Route element={<RegisterPage3 />} path="/register3" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<ClientPage />} path="/Tabelas" />
        <Route element={<Charge />} path="/clientDetails" />
        <Route element={<CobrancaPage />} path="/Reservado" />
        <Route element={<HomePage />} path="/Home" />
          
      </Route>

      {/* <Route element={<Layout />}> */}
      {/*   <Route element={<ProtectedRoutes redirectTo="/" />}> */}
          {/* <Route element={<LoginPage/>} path="/clients" />
          <Route element={<Charge />} path="/clientDetails" />
          <Route element={<CobrancaPage />} path="/cobrancas" />
          <Route element={<HomePage />} path="/Home" /> */}
        {/* </Route> */}
     {/*  </Route> */}
    </Routes>
  );
};
