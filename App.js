// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// components custom for this app:
import VideoScreen from "./src/components/VideoScreen";
import MainScreen from "./src/containers/MainScreen";
import About from "./src/components/About";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Hey" }}
        />

        <Stack.Screen
          name="About"
          component={About}
          options={{ title: "Learn Something" }}
        />
      </Stack.Navigator>
      {/* <MainScreen /> */}
    </NavigationContainer>
  );
}
