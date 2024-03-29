import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
import { EventsContext } from "../contexts/EventsContext";
import uuid from "react-native-uuid";

const EventModal = ({ onClose, onCalenderOpen, onTimeOpen, date, time }) => {
  const { events, setEvents } = useContext(EventsContext);

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [people, setPeople] = useState("");

  const createNewEvent = () => {
    const eventId = uuid.v4();
    const newEvent = {
      id: eventId,
      title,
      date,
      time,
      note,
      people,
    };
    setEvents([...events, newEvent]);
    onClose();
  };

  return (
    <ScrollView style={styles.eventModal}>
      <View style={styles.modalHeader}>
        <TouchableOpacity onPress={onClose}>
          <AntDesign name="close" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Title Input */}
      <View style={styles.titleInputContainer}>
        <TextInput
          style={styles.titleInput}
          placeholder="Add Title"
          placeholderTextColor={"#55A0EE"}
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
      </View>

      {/* Event Details */}
      <View style={styles.eventDetailsContainers}>
        <View style={styles.detailHeader}>
          <AntDesign name="clockcircleo" size={20} color="black" />
          <Text style={styles.eventDetailsTitles}>Date & Time</Text>
        </View>

        {/* Date and time selection */}
        <View style={styles.dateDetails}>
          <View style={styles.dateSubContainer}>
            <View style={styles.singleContainer}>
              <Text>Date</Text>
              <TouchableOpacity
                style={styles.selectionBtn}
                onPress={onCalenderOpen}
              >
                <Text>{date}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dateSubContainer}>
            <View style={styles.singleContainer}>
              <Text>Time</Text>
              <TouchableOpacity
                style={styles.selectionBtn}
                onPress={onTimeOpen}
              >
                <Text>
                  {time.hours}:{time.minutes} {time.ampm}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Note Input */}
      <View style={styles.eventDetailsContainers}>
        <View style={styles.detailHeader}>
          <MaterialIcons name="notes" size={20} color="black" />
          <Text style={styles.eventDetailsTitles}>Add Note</Text>
        </View>
        <TextInput
          style={[styles.eventSubInput, styles.noteInput]}
          placeholder="Add Note"
          multiline={true}
          textAlignVertical="top"
          numberOfLines={5}
          onChangeText={(text) => setNote(text)}
          value={note}
        />
        <View style={styles.detailHeader}>
          <Ionicons name="people" size={20} color="black" />
          <Text style={styles.eventDetailsTitles}>Add People</Text>
        </View>
        <TextInput
          style={styles.eventSubInput}
          placeholder="Add People"
          onChangeText={(text) => setPeople(text)}
          value={people}
        />
      </View>
      <View style={styles.saveBtn}>
        <Button title="Create" onPress={createNewEvent} />
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
  singleContainer: {
    alignItems: "center",
    gap: 10,
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
  dateSubContainer: {
    gap: 20,
  },
  selectionBtn: {
    backgroundColor: "#dfe6f2",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    height: 34,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  eventSubInput: {
    fontSize: 20,
    borderColor: "#55A0EE",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 20,
  },
  noteInput: {
    height: 100,
  },
  saveBtn: {
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
});

export default EventModal;
