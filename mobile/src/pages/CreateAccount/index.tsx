import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

// import { Container } from './styles';

const CreateAccount: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Create Account Page</Text>
      <StatusBar />
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
