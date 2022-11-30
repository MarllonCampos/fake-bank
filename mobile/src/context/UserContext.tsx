import { createContext, useState, useEffect, ReactNode } from "react";

type UserObject = {
  username: string;
  balance: string;
  token: string;
};
interface UserContextData {
  user: UserObject | any;
  updateBalance: (newBalance: number) => void;
  updateUsername: (newUsername: string) => void;
  updateToken: (newUsername: string) => void;
}

interface UserProviderProps {
  children?: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const defaultUser = { username: "", balance: 0 };
  const [user, setUser] = useState(defaultUser ?? {});

  function updateBalance(newBalance: number) {
    setUser((prevProps) => ({ ...prevProps, balance: newBalance }));
  }

  function updateUsername(newUsername: string) {
    setUser((prevProps) => ({ ...prevProps, username: newUsername }));
  }

  function updateToken(newToken: string) {
    setUser((prevProps) => ({ ...prevProps, token: newToken }));
  }

  return (
    <UserContext.Provider
      value={{
        user,
        updateBalance,
        updateUsername,
        updateToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
