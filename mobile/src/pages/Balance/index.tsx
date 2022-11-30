import React, { useContext } from "react";
import { StatusBar, StyleSheet, Text, View, Button } from "react-native";
import { UserContext } from "../../context/UserContext";

// import { Container } from './styles';

const Balance: React.FC = () => {
  const { updateToken } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text>Balance Page</Text>
      <StatusBar />

      <Button title="clear" onPress={() => updateToken("")} />
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
