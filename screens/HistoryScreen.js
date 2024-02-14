import { View, Text, StyleSheet } from "react-native";

const HistoryScreen = () => {
    return (
        <View style={styles.historyContainer}>
            <Text>History</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    historyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dfe6f2",
    }
})

export default HistoryScreen