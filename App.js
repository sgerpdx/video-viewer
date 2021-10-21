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
// import MultiSlider from "@ptomasroos/react-native-multi-slider";

export default function App() {
  return (
    <View style={styles.outerBox}>
      <View style={styles.titleRow}>
        <Text style={styles.generalText}>Video Viewer</Text>
        <View style={styles.iconRow}>
          {" "}
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{ width: 24, height: 24 }}
          ></Image>
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{ width: 24, height: 24 }}
          ></Image>
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{ width: 24, height: 24 }}
          ></Image>
        </View>
      </View>
      <TextInput style={{ height: 60 }} placeholder="Select video source:" />
      <ScrollView>
        <Image
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          style={{ width: 240, height: 240 }}
        />
        <Button
          title="Play/Pause"
          color="green"
          accessibilityLabel="Play or pause the video."
        />
        {/* <MultiSlider min="0" max="10" step="1" /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerBox: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "blue",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 360,
    height: 720,
  },
  titleRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 320,
    height: 120,
  },
  generalText: {
    color: "white",
    fontWeight: "bold",
  },
  iconRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: 120,
  },
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "flex-start",
    padding: 10,
    width: 160,
    height: 160,
  },
  colorSquare: {
    backgroundColor: "yellow",
    width: 40,
    height: 40,
    borderWidth: 4,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  controlBox: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 160,
    height: 160,
  },
});
