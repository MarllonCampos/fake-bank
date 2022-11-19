import { Route, Routes } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/create-account"
        element={<CreateAccount />}
      />
    </Routes>
  );
}
