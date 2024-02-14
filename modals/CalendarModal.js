import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Calendar from "react-native-calendars/src/calendar";

const CalendarModal = ({ toggleModal }) => {
  const [markedDates, setMarkedDates] = useState({});

  const handleDayPress = (day) => {
    console.log("Pressed date:", day.dateString);
    setMarkedDates({
      ...markedDates,
      [day.dateString]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "#bf696f",
        selectedTextColor: "white",
      },
    });

    toggleModal();
  };

  return (
    <View style={styles.calendarContainer}>
      <Calendar
        style={styles.calendar}
        hideExtraDays
        onDayPress={handleDayPress}
        theme={{
          todayTextColor: "white",
          todayBackgroundColor: "#55A0EE",
          arrowColor: "#55A0EE",
          textSectionTitleColor: "#55A0EE",
        }}
        markedDates={markedDates}
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
