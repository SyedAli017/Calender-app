import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EventCard = ({ event }) => {
  // Extracting month and date from startDate and endDate
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);

  // Formatting month and date to MonthName and DD format
  const options = { month: "short", day: "2-digit" };
  const formattedStartMonth = startDate.toLocaleString("en-US", {
    month: "short",
  });
  const formattedEndMonth = endDate.toLocaleString("en-US", { month: "short" });
  const formattedStartDate = startDate.toLocaleString("en-US", {
    day: "2-digit",
  });
  const formattedEndDate = endDate.toLocaleString("en-US", { day: "2-digit" });

  return (
    <View style={styles.eventCard}>
      <View style={styles.dateContainer}>
        <Text style={styles.month}>{formattedStartMonth}</Text>
        <Text style={styles.date}>{formattedStartDate}</Text>
      </View>
      <View style={styles.eventInfo}>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>{event.title}</Text>
          <View style={styles.timeContainer}>
            <Text style={styles.startTime}>
              {event.startTime.hours}:{event.startTime.minutes}{" "}
              {event.startTime.ampm} -{" "}
            </Text>
            <Text style={styles.endTime}>
              {event.endTime.hours}:{event.endTime.minutes} {event.endTime.ampm}
            </Text>
          </View>
        </View>
        <View style={styles.peopleContainer}>
          <Text style={styles.people}>{event.people}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventCard: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 5,
  },
  eventInfo: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    width: "82%",
  },
  dateContainer: {
    alignItems: "center",
    gap: 2,
    width: "15%",
  },
  month: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 16,
    backgroundColor: "#2320f5",
    alignSelf: "center",
    padding: 8,
    borderRadius: 50,
    color: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  timeContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  startTime: {
    fontSize: 16,
    color: "gray",
  },
  endTime: {
    fontSize: 16,
    color: "gray",
  },
});

export default EventCard;
