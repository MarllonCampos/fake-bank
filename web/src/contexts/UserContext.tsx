import { createContext, useState, useEffect, ReactNode } from "react";
import { getUser } from "../utils/localStorage";

interface UserData {
  balance: number;
  username: string;
  updateBalance: (newBalance: number) => void;
  updateUsername: (newUsername: string) => void;
}

interface UserProviderProps {
  children?: ReactNode;
}

export const UserContext = createContext({} as UserData);

export function UserProvider({ children }: UserProviderProps) {
  const user = getUser();
  const [username, setUsername] = useState(user?.username ?? "");
  const [balance, setBalance] = useState(user?.balance ?? 0);

  function updateBalance(newBalance: number) {
    setBalance(newBalance);
  }

  function updateUsername(newUsername: string) {
    setUsername(newUsername);
  }

  return (
    <UserContext.Provider
      value={{
        username,
        updateBalance,
        updateUsername,
        balance,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
