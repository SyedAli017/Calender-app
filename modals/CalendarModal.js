import { View, Text, StyleSheet } from "react-native";

const CalendarModal = () => {
  return (
    <View style={styles.calendarModal}>
      <Text>Calendar Modal Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  calendarModal: {
    width: 300,
    height: 300,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    borderRadius: 10,
  },
});

export default CalendarModal;
