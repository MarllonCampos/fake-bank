import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <StatusBar />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
