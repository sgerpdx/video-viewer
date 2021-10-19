import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <ScrollView>
      <Text>Now we're talking!</Text>
      <Image source={require("./reddit-avatar.png")} style={{ width: 100 }} />
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{ width: 400, height: 400 }}
      />
      <TextInput
        style={{ height: 60 }}
        placeholder="Now's your turn to respond!"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
