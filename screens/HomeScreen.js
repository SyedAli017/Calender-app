import { View, Text, StyleSheet } from "react-native";
import AddButton from "../components/AddButton";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <AddButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe6f2",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    bottom: 30,
    right: 30,
    zIndex: 999,
  },
});

export default HomeScreen;
