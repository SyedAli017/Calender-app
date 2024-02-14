import React, { useContext, useState } from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { EventsContext } from "../contexts/EventsContext";
import AddButton from "../components/AddButton";
import CalendarModal from "../modals/CalendarModal";

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { events } = useContext(EventsContext);

  console.log("events", events);

  return (
    <View style={styles.container}>
      <Text style={styles.upcomingTitle}>Upcoming Events</Text>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <CalendarModal
              toggleModal={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
      <View style={styles.eventContent}>
        {events ? (
          // Rendering event data if events is not null or undefined
          <View>
            <Text>Date: {events.dateString}</Text>
            <Text>Day: {events.day}</Text>
            <Text>Month: {events.month}</Text>
            <Text>Year: {events.year}</Text>
          </View>
        ) : (
          // Displaying a message if events is null or undefined
          <Text style={styles.noEventMessage}>
            No events scheduled yet. Add one whenever you're ready.
          </Text>
        )}
      </View>
      <View style={styles.button}>
        <AddButton onPress={() => setModalVisible(true)} />
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
  modalBackground: {
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
