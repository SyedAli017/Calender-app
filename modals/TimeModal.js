import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const TimeModal = ({ onClose, onSelectTime}) => {
  const getCurrentTime = () => {
    const now = new Date();
    return {
      hours: now.getHours() %  12 ||  12, // Adjust to  12-hour format
      minutes: now.getMinutes().toString().padStart(2, "0"),
      ampm: now.getHours() >=  12 ? "PM" : "AM", // Determine if it's AM or PM
    };
  };

  const [hours, setHours] = useState(getCurrentTime().hours.toString());
  const [minutes, setMinutes] = useState(getCurrentTime().minutes);
  const [ampm, setAmPm] = useState(getCurrentTime().ampm);

  // Function to handle changing hours
  const handleHoursChange = (text) => {
    if (text.length <=  2) {
      setHours(text);
    }
  };

  // Function to handle changing minutes
  const handleMinutesChange = (text) => {
    if (text.length <=  2) {
      setMinutes(text);
    }
  };

  // Function to toggle between AM and PM
  const toggleAmPm = () => {
    setAmPm(ampm === "AM" ? "PM" : "AM");
  };

  const setTime = () => {
    const time = { hours, minutes, ampm };
    onSelectTime(time); 
    onClose();
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
        <TouchableOpacity onPress={toggleAmPm}>
          <Text style={styles.ampm}>{ampm}</Text>
        </TouchableOpacity>
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
    backgroundColor: "white",
    padding:  20,
    borderRadius:  20,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
    gap:  5,
  },
  input: {
    borderWidth:  1,
    borderColor: "black",
    padding:  5,
    width:  50,
    textAlign: "center",
    fontSize:  20,
    marginHorizontal:  5,
  },
  timeSeperator: {
    fontSize:  20,
    fontWeight: "bold",
    color: "black",
    marginTop:  20,
  },
  ampm: {
    fontSize:  20,
    fontWeight: "bold",
    color: "black",
    marginLeft:  5,
    marginTop:  20,
    textDecorationLine: "underline",
  },
  setBtn: {
    marginTop:  20,
    backgroundColor: "#55A0EE",
    borderRadius:  20,
    paddingVertical:  10,
    paddingHorizontal:  30,
    alignItems: "center",
    justifyContent: "center",
  },
  setBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize:  20,
  },
});

export default TimeModal;
