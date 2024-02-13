import { useState } from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import AddButton from "../components/AddButton";
import CalendarModal from "../modals/CalendarModal";

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.upcomingTitle}>Upcoming Events</Text>
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <CalendarModal />
        </View>
      </Modal>
      <View style={styles.centerContent}>
        <Text style={styles.noEventMessage}>
          No events scheduled yet. Add one whenever you're ready.
        </Text>
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
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  centerContent: {
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
