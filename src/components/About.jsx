import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function About({ navigation }) {
  return (
    <View style={styles.outerBox}>
      <Text>
        This app was created to experiment with video presentation and settings
        on mobile devices.
      </Text>
      <Button
        title="Return to main screen"
        onPress={() => navigation.navigate("Main")}
      />
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
    width: 420,
    height: 720,
  },
  generalText: {
    color: "white",
    fontWeight: "bold",
  },
});
