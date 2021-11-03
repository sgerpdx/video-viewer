import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function About({ navigation }) {
  return (
    <View style={styles.aboutBox}>
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
  aboutBox: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "green",
    color: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 360,
    height: 680,
  },
});
