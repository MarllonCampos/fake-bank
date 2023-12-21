import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { UserContext } from "../../context/UserContext";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const Header: React.FC = () => {
  const { user, useLogout } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.username}> {user.username}</Text>
      <FontAwesome5 style={styles.money} name="ethereum" color={"#E6E6E6"} size={26} />
      <Text style={styles.balance}> {user.balance}</Text>
      <TouchableOpacity onPress={useLogout}>
        <MaterialIcons style={styles.logout} name="logout" color={"#E6E6E6"} size={26} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 30,
    backgroundColor: "#3346F0",
    width: "100%",
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "auto",
  },
  username: {
    color: "#E6E6E6",
    fontSize: 22,
    fontWeight: "bold",
  },
  money: {
    marginLeft: "auto",
  },
  balance: {
    fontSize: 22,
    color: "#E6E6E6",
  },
  logout: {
    marginLeft: 24,
  },
});

export default Header;
