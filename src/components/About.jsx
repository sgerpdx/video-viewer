import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function About({ navigation }) {
  return (
    <View>
      <Text>
        This app was created to experiment with video presentation and settings on mobile
        devices.
      </Text>
      <Button
        title="Return to main screen"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  );
}
