import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Balance from "../pages/Balance";
import Withdraw from "../pages/Withdraw";
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccount";
import { UserContext } from "../context/UserContext";
export const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  const {
    user: { token },
  } = useContext(UserContext);
  const isSignedIn = !!token;

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: "#3346F0",
        tabBarInactiveTintColor: "#222222",
        headerShown: false,
      }}
    >
      {isSignedIn ? (
        <>
          <Screen
            name="Balance"
            component={Balance}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="account-balance-wallet" color={color} size={size} />
              ),
            }}
          />
          <Screen
            name="Withdraw"
            component={Withdraw}
            options={{
              tabBarIcon: ({ color, size }) => <MaterialIcons name="transform" color={color} size={size} />,
            }}
          />
        </>
      ) : (
        <>
          <Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "Login",
              tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
            }}
          />
          <Screen
            name="CreateAccount"
            component={CreateAccount}
            options={{
              tabBarLabel: "CreateAccount",
              tabBarIcon: ({ color, size }) => <MaterialIcons name="person-add" color={color} size={size} />,
            }}
          />
        </>
      )}
    </Navigator>
  );
}
