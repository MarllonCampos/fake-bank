import React, { useContext, useState } from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../context/UserContext";

const Home = () => {
  const { updateToken } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const navigateToCreateAccount = () => {
    navigation.navigate("CreateAccount");
  };

  const logUser = () => {
    // console.log("Logs?");\
    const userData = {
      password,
      username,
      token: "",
    };

    console.log(userData);
    // updateToken("3ASDADSA");
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"} />
      <Text style={styles.mainTitle}>
        {"<<"}NG Cash{">>"}
      </Text>
      <View style={styles.userInfo}>
        <Text style={styles.instructions}>Log with your credentials</Text>
        <TextInput placeholder="username" style={styles.input} onChangeText={setUsername} />
        <TextInput secureTextEntry placeholder="password" style={styles.input} onChangeText={setPassword} />
        <TouchableOpacity style={styles.signInButton} onPress={logUser}>
          <Text style={styles.signInButtonText}>SignIn</Text>
        </TouchableOpacity>
        <Text style={styles.createAccount}>
          Don't have a account?{" "}
          <Text style={styles.createAccountAnchor} onPress={navigateToCreateAccount}>
            Create now
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    paddingVertical: 12,
  },
  mainTitle: {
    fontWeight: "bold",
    fontSize: 36,
  },
  instructions: {
    fontWeight: "400",
    textAlign: "left",
    fontSize: 24,
  },

  input: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: "100%",
    textAlign: "left",
    borderRadius: 10,
    marginTop: 10,
  },
  userInfo: {
    marginTop: "auto",
    marginBottom: "auto",

    marginHorizontal: 15,
    width: "90%",
    paddingVertical: 15,
  },
  signInButton: {
    width: "100%",
    backgroundColor: "#3346F0",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 10,
  },
  signInButtonText: {
    color: "#E6E6E6",
    fontWeight: "400",
  },
  createAccount: {
    textAlign: "left",
    marginTop: 10,
    fontWeight: "400",
  },
  createAccountAnchor: {
    marginBottom: "auto",
    color: "#6674F4",
    fontWeight: "bold",
  },
});
