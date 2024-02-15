import { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import EventCard from "../components/EventCard";
import { EventsContext } from "../contexts/EventsContext";

const HistoryScreen = () => {
  const { events } = useContext(EventsContext);

  return (
    <View style={styles.historyContainer}>
      <ScrollView style={styles.eventContent}>
        {events && events.length > 0 ? (
          events.map((event) => <EventCard key={event.title} event={event} />)
        ) : (
          <Text style={styles.noEventMessage}>No event history yet.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  historyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dfe6f2",
  },
  noEventMessage: {
    fontSize: 22,
    alignSelf: "center",
    textAlign: "center",
    color: "gray",
    marginTop: 250,
  },
});

export default HistoryScreen;
