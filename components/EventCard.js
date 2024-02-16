import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EventCard = ({ event }) => {
  const date = new Date(event.date);

  // Formatting month and date to MonthName and DD format
  const formattedMonth = date.toLocaleString("en-US", {
    month: "short",
  });
  const formattedDate = date.toLocaleString("en-US", {
    day: "2-digit",
  });

  return (
    <View style={styles.eventCard}>
      <View style={styles.dateContainer}>
        <Text style={styles.month}>{formattedMonth}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <View style={styles.eventInfo}>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>{event.title}</Text>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>
              {event.time.hours}:{event.time.minutes} {event.time.ampm}
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
  time: {
    fontSize: 16,
    color: "gray",
  },
});

export default EventCard;
