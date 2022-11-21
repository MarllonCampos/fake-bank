import { Route, Routes, RouteProps, Navigate, useNavigate, Outlet } from "react-router-dom";

import { Header } from "../../components/Header";

import { Container } from "./styles";

const MyAccount = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default MyAccount;
