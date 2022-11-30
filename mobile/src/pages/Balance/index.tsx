import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

// import { Container } from './styles';

const Balance: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Balance Page</Text>
      <StatusBar />
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
