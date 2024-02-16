import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { EventsContext } from "../contexts/EventsContext";
import Calendar from "react-native-calendars/src/calendar";

const CalendarModal = ({ toggleModal, onSelectDate}) => {

  const handleDayPress = (day) => {
    onSelectDate(day.dateString);
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    flex:   1,
    justifyContent: "center",
    alignItems: "center",
  },
  calendar: {
    borderRadius:   10,
    elevation:   10,
    backgroundColor: "white",
    padding:   10,
    margin:   10,
    width:   320,
  },
});

export default CalendarModal;
