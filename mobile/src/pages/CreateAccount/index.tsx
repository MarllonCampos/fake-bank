import React, { useContext } from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../context/UserContext";

type StackRoutes = {
  Home: undefined;
  CreateAccount: undefined;
  Balance: undefined;
  Withdraw: undefined;
};

const CreateAccount = () => {
  const { updateToken } = useContext(UserContext);
  const navigation = useNavigation();
  const navigateToCreateAccount = () => {
    navigation.navigate("CreateAccount");
  };

  const logUser = () => {
    // console.log("Logs?");
    updateToken("3ASDADSA");
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"} />
      <Text style={styles.mainTitle}>
        {"<<"}NG Cash{">>"}
      </Text>
      <View style={styles.userInfo}>
        <Text style={styles.instructions}>Create an account</Text>
        <TextInput placeholder="username" style={styles.input} />
        <TextInput secureTextEntry placeholder="password" style={styles.input} />
        <TouchableOpacity style={styles.createAccount} onPress={logUser}>
          <Text style={styles.createAccountText}>Create Account</Text>
        </TouchableOpacity>
        <Text style={styles.logIn}>
          Already have an account?{" "}
          <Text style={styles.logInAnchor} onPress={navigateToCreateAccount}>
            Create now
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default CreateAccount;

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
  createAccount: {
    width: "100%",
    backgroundColor: "#3346F0",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 10,
  },
  createAccountText: {
    color: "#E6E6E6",
    fontWeight: "400",
  },
  logIn: {
    textAlign: "left",
    marginTop: 10,
    fontWeight: "400",
  },
  logInAnchor: {
    marginBottom: "auto",
    color: "#6674F4",
    fontWeight: "bold",
  },
});
