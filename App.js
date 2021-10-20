// import { StatusBar } from "expo-status-bar";
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
    <View
      style={[styles.container, { flexDirection: "row", flexWrap: "wrap" }]}
    >
      <View style={styles.colorSquare}>
        <Text>1</Text>
      </View>
      <View style={styles.colorSquare}>
        <Text>2</Text>
      </View>
      <View style={styles.colorSquare}>
        <Text>3</Text>
      </View>
      <View style={styles.colorSquare}>
        <Text>4</Text>
      </View>
      <View style={styles.colorSquare}>
        <Text>5</Text>
      </View>
      <View style={styles.colorSquare}>
        <Text>6</Text>
      </View>
      <View style={styles.colorSquare}>
        <Text>7</Text>
      </View>
      <View style={styles.colorSquare}>
        <Text>8</Text>
      </View>
      <View style={styles.colorSquare}>
        <Text>9</Text>
      </View>
      {/* <View>
        <button>push me</button>
      </View> */}
      {/* <Text>d i v i d e r</Text>
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{ width: 400, height: 400 }}
      />
      <TextInput
        style={{ height: 60 }}
        placeholder="Enter text here."
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
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
});
