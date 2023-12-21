import { createContext, useState, useEffect, ReactNode } from "react";
import { getUser, logoutUser } from "../utils/asyncStorage";

type UserObject = {
  username: string;
  balance: number;
  token?: string;
};
interface UserContextData {
  user: UserObject;

  setUser: (newUser: UserObject) => void;
  useLogout: () => void;
}

interface UserProviderProps {
  children?: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const defaultUser = { username: "", balance: 0 };
  const [user, setUser] = useState<UserObject>(defaultUser);

  const useLogout = async () => {
    await logoutUser();
    setUser({ username: "", token: "", balance: 0 });
  };
  useEffect(() => {
    const UserFromAsyncStorage = async () => {
      const userObject = await getUser();
      console.log(userObject);
      setUser(userObject ? userObject : defaultUser);
    };

    UserFromAsyncStorage();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        useLogout,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
