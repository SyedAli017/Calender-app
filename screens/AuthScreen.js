import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import AuthInput from "../components/AuthInput";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../components/Button";

const authImage = require("../assets/AuthScreen/auth.png");

const AuthScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calendar</Text>
      <Image style={styles.image} source={authImage} />
      <AuthInput
        placeholder="Mobile Number"
        icon={<FontAwesome name="mobile" size={30} color="black" />}
        renderButton
        buttonText="Send OTP"
      />
      <AuthInput
        placeholder="OTP"
        icon={<FontAwesome name="lock" size={24} color="black" />}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 50,
    fontWeight: "bold",
  },

  image: {
    width: 250,
    height: 250,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});

export default AuthScreen;
