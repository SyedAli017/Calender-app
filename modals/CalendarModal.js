import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CalendarModal = () => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.getDate();
  };

  const getCurrentDateYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };

  const getCurrentDateMonth = () => {
    const currentDate = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[currentDate.getMonth()];
  };

  const renderDates = () => {
    const currentDate = getCurrentDate();
    const dates = [];

    for (let i = 1; i <= 31; i++) {
      dates.push(
        <View
          key={i}
          style={[
            styles.dateContainer,
            i === currentDate && styles.highlightedDate,
          ]}
        >
          <Text style={styles.dateText}>{i}</Text>
        </View>
      );
    }

    return dates;
  };

  return (
    <View style={styles.calendarModal}>
      <Text style={styles.dateMonthYear}>
        {getCurrentDateMonth()}, {getCurrentDateYear()}
      </Text>
      {/* Render the dates grid */}
      <View style={styles.datesContainer}>{renderDates()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  calendarModal: {
    width: "85%",
    height: 280,
    backgroundColor: "white",
    alignItems: "center",
    elevation: 10,
    borderRadius: 10,
  },
  dateMonthYear: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    height: "20%",
    paddingTop: 20,
  },
  datesContainer: {
    height: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
  },
  dateContainer: {
    width: "14.285%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  dateText: {
    fontSize: 16,
  },
  highlightedDate: {
    backgroundColor: "lightblue",
  },
});

export default CalendarModal;
