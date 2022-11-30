import React, { useContext } from "react";
import { StatusBar, StyleSheet, Text, View, Button } from "react-native";
import Header from "../../components/Header";
import { UserContext } from "../../context/UserContext";

// import { Container } from './styles';

const Balance: React.FC = () => {
  const { setUser, useLogout } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <Text>Balance Page</Text>

      <Button title="clear" onPress={useLogout} />
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
