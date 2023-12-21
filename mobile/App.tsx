import { Routes } from "./src/routes";
import React from "react";
import { UserProvider } from "./src/context/UserContext";

export default function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}
