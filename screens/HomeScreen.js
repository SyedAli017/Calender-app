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
import EventCard from "../components/EventCard";
import DetailedEventModal from "../modals/DetailedEventModal";

const HomeScreen = () => {
  // Modal states
  const [eventsModalVisible, setEventsModalVisible] = useState(false);
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [timeModalVisible, setTimeModalVisible] = useState(false);
  const [isDetailedModalVisible, setIsDetailedModalVisible] = useState(false);

  const { events, setEvents } = useContext(EventsContext);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Event states
  const [date, setDate] = useState(null);
  const [time, setTime] = useState({ hours: "", minutes: "" });

  const clearAllEvents = () => {
    setEvents([]);
  };

  const onEventPress = ({ event }) => {
    setSelectedEvent(event);
    setIsDetailedModalVisible(true);
  };

  const onEventDelete = ({ event }) => {
    const newEvents = events.filter((e) => e.id !== event.id);
    setEvents(newEvents);
    setIsDetailedModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.upcomingTitle}>Upcoming Events</Text>
        {events.length > 0 && (
          <TouchableOpacity onPress={clearAllEvents}>
            <Text style={styles.clearAllText}>Clear All</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Modal to add events */}
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
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
          />
        </View>
      </Modal>

      {/* Calendar Modal */}
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
            onSelectDate={setDate}
          />
        </TouchableOpacity>
      </Modal>

      {/* Time Modal */}
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
          <TimeModal
            onClose={() => setTimeModalVisible(false)}
            onSelectTime={setTime}
          />
        </TouchableOpacity>
      </Modal>

      {/* Event cards or no events message */}
      <ScrollView style={styles.eventContent}>
        {events && events.length > 0 ? (
          events.map((event) => (
            <TouchableOpacity
              key={event.id}
              onPress={() => onEventPress({ event })}
            >
              <EventCard key={event.id} event={event} />
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noEventMessage}>
            No events scheduled yet. Add one whenever you're ready.
          </Text>
        )}
      </ScrollView>

      {/* Detailed event modal */}
      <Modal
        visible={isDetailedModalVisible}
        animationType="slide"
        onRequestClose={() => setIsDetailedModalVisible(false)}
      >
        <DetailedEventModal
          event={selectedEvent}
          onClose={() => setIsDetailedModalVisible(false)}
          onDelete={onEventDelete}
        />
      </Modal>

      {/* Add event button */}
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
  header: {
    marginVertical: 10,
    paddingLeft: 10,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  clearAllText: {
    fontSize: 16,
    fontWeight: "bold",
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
    paddingLeft: 10,
    fontSize: 24,
    borderLeftWidth: 2,
    fontWeight: "bold",
    borderColor: "black",
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
