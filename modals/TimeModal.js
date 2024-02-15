import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const TimeModal = () => {
  const getCurrentTime = () => {
    const now = new Date();
    return {
      hours: now.getHours().toString().padStart(2, "0"),
      minutes: now.getMinutes().toString().padStart(2, "0"),
    };
  };

  const [hours, setHours] = useState(getCurrentTime().hours);
  const [minutes, setMinutes] = useState(getCurrentTime().minutes);

  // Function to handle changing hours
  const handleHoursChange = (text) => {
    if (text.length <= 2) {
      setHours(text);
    }
  };

  // Function to handle changing minutes
  const handleMinutesChange = (text) => {
    if (text.length <= 2) {
      setMinutes(text);
    }
  };

  const setTime = () => {
    console.log("set time", hours, minutes);
  };

  return (
    <View style={styles.timeModal}>
      <View style={styles.timeContainer}>
        <View style={styles.inputContainer}>
          <Text>Hrs</Text>
          <TextInput
            style={styles.input}
            value={hours}
            onChangeText={handleHoursChange}
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.timeSeperator}>:</Text>
        <View style={styles.inputContainer}>
          <Text>Mins</Text>
          <TextInput
            style={styles.input}
            value={minutes}
            onChangeText={handleMinutesChange}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.setBtn}>
        <TouchableOpacity onPress={setTime}>
          <Text style={styles.setBtnText}>Set</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeModal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dfe6f2",
    padding: 20,
    borderRadius: 20,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
    gap: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    width: 50,
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 5,
  },
  timeSeperator: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
  },
  setBtn: {
    marginTop: 20,
    backgroundColor: "#55A0EE",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  setBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  }
});

export default TimeModal;
