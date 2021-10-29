import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";

export default function About({ navigation }) {
  // material menu starter code:
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

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
});
