import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const AuthInput = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {props.icon}
        <TextInput style={styles.input} placeholder={props.placeholder} />
        {props.renderButton && (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{props.buttonText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  inputContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingLeft: 20,
    backgroundColor: "#c5d9ed",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    paddingHorizontal: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "#c5d9ed",
    borderLeftWidth: 2,
    borderColor: "gray",
  },
  buttonText: {
    color: "gray",
    fontSize: 16,
  },
});

export default AuthInput;
