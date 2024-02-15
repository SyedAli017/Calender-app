import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { EventsContext } from "../contexts/EventsContext";
import EventModal from "../modals/EventModal";
import CalendarModal from "../modals/CalendarModal";
import AddButton from "../components/AddButton";
import TimeModal from "../modals/TimeModal";

const HomeScreen = () => {
  const [eventsModalVisible, setEventsModalVisible] = useState(false);
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [timeModalVisible, setTimeModalVisible] = useState(false);
  const { events } = useContext(EventsContext);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState({ hours: "", minutes: "" });
  const [endTime, setEndTime] = useState({ hours: "", minutes: "" });

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
          <EventModal
            onClose={() => setEventsModalVisible(false)}
            onCalenderOpen={() => setCalendarModalVisible(true)}
            onTimeOpen={() => setTimeModalVisible(true)}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
          />
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
            onClose={() => setCalendarModalVisible(false)}
            onSelectStartDate={setStartDate}
            onSelectEndDate={setEndDate}
          />
        </TouchableOpacity>
      </Modal>
      <Modal
        animationType="fade"
        transparent
        visible={timeModalVisible}
        onRequestClose={() => setTimeModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.calendarModalBackground}
          activeOpacity={1}
          onPress={() => setTimeModalVisible(false)}
        >
          <TimeModal onClose={() => setTimeModalVisible(false)} 
          onSelectStartTime={setStartTime}
          onSelectEndTime={setEndTime}
          />
        </TouchableOpacity>
      </Modal>
      <ScrollView style={styles.eventContent}>
        {events && events.length > 0 ? (
          events.map((event, index) => (
            <View key={index}>
              <Text>Title: {event.title}</Text>
              <Text>Start Date: {event.startDate}</Text>
              <Text>End Date: {event.endDate}</Text>
              <Text>
                Start Time: {event.startTime.hours}:{event.startTime.minutes}{" "}
                {event.startTime.ampm}
              </Text>
              <Text>
                End Time: {event.endTime.hours}:{event.endTime.minutes}{" "}
                {event.endTime.ampm}
              </Text>
              <Text>Note: {event.note}</Text>
              <Text>People: {event.people}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noEventMessage}>
            No events scheduled yet. Add one whenever you're ready.
          </Text>
        )}
      </ScrollView>
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
    marginTop: 150,
  },
  button: {
    position: "absolute",
    bottom: 30,
    right: 30,
    zIndex: 999,
  },
});

export default HomeScreen;
