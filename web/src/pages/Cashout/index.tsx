import { Route, Routes, RouteProps, Navigate, useNavigate, Outlet } from "react-router-dom";

import { Container } from "./styles";

const Cashout = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>Cashout</h1>
    </Container>
  );
};

export default Cashout;
