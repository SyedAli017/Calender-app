import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const EventModal = ({ onClose }) => {
  return (
    <View style={styles.eventModal}>
      <View style={styles.modalHeader}>
        <TouchableOpacity onPress={onClose}>
          <AntDesign name="close" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.titleInputContainer}>
        <TextInput
          style={styles.titleInput}
          placeholder="Add Title"
          placeholderTextColor={"#55A0EE"}
        />
      </View>
      <View style={styles.eventDetailsContainers}>
        <View style={styles.detailHeader}>
          <AntDesign name="clockcircleo" size={20} color="black" />
          <Text style={styles.eventDetailsTitles}>Date & Time</Text>
        </View>
      </View>
      <View style={styles.eventDetailsContainers}>
        <View style={styles.detailHeader}>
          <MaterialIcons name="notes" size={20} color="black" />
          <Text style={styles.eventDetailsTitles}>Add Note</Text>
        </View>
        <View style={styles.detailHeader}>
          <Ionicons name="people" size={20} color="black" />
          <Text style={styles.eventDetailsTitles}>Add People</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventModal: {
    backgroundColor: "#dfe6f2",
    height: "100%",
    padding: 10,
  },
  titleInputContainer: {
    borderBottomWidth: 1,
    borderColor: "#55A0EE",
    marginTop: 10,
  },
  titleInput: {
    fontSize: 20,
    color: "#55A0EE",
    paddingHorizontal: 26,
    paddingVertical: 5,
  },
  eventDetailsContainers: {
    borderBottomWidth: 1,
    borderColor: "gray",
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
});

export default EventModal;
