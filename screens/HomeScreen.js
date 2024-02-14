import React, { useContext, useState } from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { EventsContext } from "../contexts/EventsContext";
import EventModal from "../modals/EventModal";
import CalendarModal from "../modals/CalendarModal";
import AddButton from "../components/AddButton";

const HomeScreen = () => {
  const [eventsModalVisible, setEventsModalVisible] = useState(false);
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const { events } = useContext(EventsContext);

  console.log("events", events);

  return (
    <View style={styles.container}>
      <Text style={styles.upcomingTitle}>Upcoming Events</Text>
      <Modal
        animationType="slide"
        visible={eventsModalVisible}
        onRequestClose={() => setEventsModalVisible(false)}
      >
        <View style={styles.eventModalContent}>
          <EventModal onClose={() => setEventsModalVisible(false)} />
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={calendarModalVisible}
        onRequestClose={() => {
          setCalendarModalVisible(false);
        }}
      >
        <TouchableOpacity
          style={styles.calendarModalBackground}
          activeOpacity={1}
          onPress={() => setCalendarModalVisible(false)}
        >
          <CalendarModal
            toggleModal={() => {
              setCalendarModalVisible(false);
            }}
          />
        </TouchableOpacity>
      </Modal>
      <View style={styles.eventContent}>
        {events ? (
          <View>
            <Text>Date: {events.dateString}</Text>
            <Text>Day: {events.day}</Text>
            <Text>Month: {events.month}</Text>
            <Text>Year: {events.year}</Text>
          </View>
        ) : (
          <Text style={styles.noEventMessage}>
            No events scheduled yet. Add one whenever you're ready.
          </Text>
        )}
      </View>
      <View style={styles.button}>
        <AddButton onPress={() => setEventsModalVisible(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe6f2",
    justifyContent: "center",
    alignItems: "center",
  },
  eventModalContent: {
    // backgroundColor: "#dfe6f2",
  },
  calendarModalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  eventContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  upcomingTitle: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    borderLeftWidth: 2,
    borderColor: "black",
    paddingLeft: 10,
    alignSelf: "flex-start",
  },
  noEventMessage: {
    fontSize: 22,
    alignSelf: "center",
    textAlign: "center",
    color: "gray",
    marginBottom: 80,
  },
  button: {
    position: "absolute",
    bottom: 30,
    right: 30,
    zIndex: 999,
  },
});

export default HomeScreen;
