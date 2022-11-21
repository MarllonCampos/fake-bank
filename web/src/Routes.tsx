import { ReactNode } from "react";
import { Route, Routes, RouteProps, Navigate } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Balance from "./pages/Balance";
import Cashout from "./pages/Cashout";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import { getUser } from "./utils/localStorage";

export default function AppRoutes() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route
          path="/myaccount"
          element={
            <RequireAuth>
              <MyAccount />
            </RequireAuth>
          }
        >
          <Route index element={<Balance />} />
          <Route path="cash-out" element={<Cashout />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let user = getUser();
  console.log(user?.token, "RequireAuth");
  if (!user || !user?.token) {
    return <Navigate to="/" replace />;
  }

  return children;
}
