import { View, Text, StyleSheet } from "react-native";
import Calendar from "react-native-calendars/src/calendar";

const CalendarModal = ({ toggleModal }) => {
  const handleDayPress = (day) => {
    console.log("Pressed date:", day.dateString);
    toggleModal();
  };

  return (
    <View style={styles.calendarContainer}>
      <Calendar
        style={styles.calendar}
        hideExtraDays
        onDayPress={handleDayPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {},
  calendar: {
    borderRadius: 10,
    elevation: 10,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    width: 320,
  },
});

export default CalendarModal;
