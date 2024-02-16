import { View, Text, ScrollView, StyleSheet } from "react-native";

const NotificationScreen = () => {
  return (
    <View style={styles.notificationContainer}>
      <ScrollView style={styles.eventContent}>
        <Text style={styles.noEventMessage}>No Notifications to show</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
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

export default NotificationScreen;
