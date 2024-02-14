import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventsContextProvider from "./contexts/EventsContext";
import AuthScreen from "./screens/AuthScreen";
import HomeScreen from "./screens/HomeScreen";
import HistoryScreen from "./screens/HistoryScreen";
import NotificationScreen from "./screens/NotificationScreen";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  const [events, setEvents] = useState([]);

  const homeHeaderIcons = ({ navigation }) => {
    return (
      <>
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <MaterialIcons
            name="notifications-none"
            size={24}
            color="black"
            marginRight={10}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("History")}>
          <MaterialIcons name="history" size={24} color="black" />
        </TouchableOpacity>
      </>
    );
  };
  return (
    <>
      <EventsContextProvider events={events} setEvents={setEvents}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={AuthScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={({ navigation }) => ({
                headerTitle: "Home",
                headerTintColor: "#000",
                headerTitleAlign: "center",
                headerRight: () => homeHeaderIcons({ navigation }),
              })}
            />
            <Stack.Screen
              name="History"
              component={HistoryScreen}
              options={{
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="Notifications"
              component={NotificationScreen}
              options={{
                headerTitleAlign: "center",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </EventsContextProvider>
    </>
  );
}
