import { TouchableOpacity, Text, StyleSheet } from "react-native";

const AddButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#55A0EE",
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 28,
  },
});

export default AddButton;
