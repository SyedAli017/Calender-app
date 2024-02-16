import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Button from "../components/Button";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const DetailedEventModal = ({ event, onClose, onDelete }) => {
  const handleDelete = ({ event }) => {
    onDelete({ event });
    onClose();
  };

  return (
    <ScrollView style={styles.eventModal}>
      <View style={styles.modalHeader}>
        <TouchableOpacity onPress={onClose}>
          <AntDesign name="close" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{event.title}</Text>
      </View>

      {/* Event Details */}
      <View style={styles.eventDetailsContainers}>
        <View style={styles.detailHeader}>
          <AntDesign name="clockcircleo" size={20} color="black" />
          <Text style={styles.eventDetailsTitles}>Date & Time</Text>
        </View>

        {/* Date and time selection */}
        <View style={styles.dateDetails}>
          <Text style={styles.dateTime}>{event.date}</Text>
          <Text style={styles.dateTime}>
            {event.time.hours}:{event.time.minutes} {event.time.ampm}
          </Text>
        </View>
      </View>

      {/* Note Input */}
      <View style={styles.eventDetailsContainers}>
        <View style={styles.detailHeader}>
          <MaterialIcons name="notes" size={20} color="black" />
          <Text style={styles.eventDetailsTitles}>Note</Text>
        </View>
        <Text style={styles.eventSubDetails}>{event.note || "No Note"}</Text>
        <View style={styles.detailHeader}>
          <Ionicons name="people" size={20} color="black" />
          <Text style={styles.eventDetailsTitles}>People</Text>
        </View>
        <Text style={styles.eventSubDetails}>
          {event.people || "No People"}
        </Text>
      </View>
      <View style={styles.deleteBtn}>
        <Button title="Delete" onPress={() => handleDelete({ event })} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  eventModal: {
    backgroundColor: "#dfe6f2",
    height: "100%",
    padding: 10,
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: "#55A0EE",
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    color: "#55A0EE",
    paddingHorizontal: 26,
    paddingVertical: 5,
  },
  eventDetailsContainers: {
    borderBottomWidth: 1,
    borderColor: "#55A0EE",
    paddingVertical: 10,
  },
  detailHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  eventDetailsTitles: {
    fontSize: 18,
    color: "black",
  },
  dateDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  eventSubDetails: {
    fontSize: 20,
    padding: 10,
    margin: 20,
  },
  deleteBtn: {
    width: "65%",
    alignSelf: "center",
    marginBottom: 20,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  eventModalContent: {
    flex: 1,
  },
  dateTime: {
    fontSize: 20,
    color: "black",
  },
});

export default DetailedEventModal;
