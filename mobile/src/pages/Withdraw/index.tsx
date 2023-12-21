import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

// import { Container } from './styles';

const Withdraw: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Withdraw Page</Text>
      <StatusBar />
    </View>
  );
};

export default Withdraw;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
