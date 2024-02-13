import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#55A0EE",
    borderRadius: 10,
    paddingHorizontal: 80,
    paddingVertical: 15,
    marginTop: 50,
    elevation: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

export default Button;
