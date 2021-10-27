// import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useRef } from "react";
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
import { Asset, useAssets } from "expo-asset";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
// import ModalDropdown from "react-native-modal-dropdown";

// import components:
import VideoScreen from "../components/VideoScreen";

export default function MainScreen({ navigation }) {
  // material menu starter code:
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  return (
    <View style={styles.outerBox}>
      <View style={styles.titleRow}>
        <Text style={styles.generalText}>Video Viewer</Text>
        <View style={styles.iconRow}>
          <Menu
            visible={visible}
            anchor={
              <Button
                onPress={showMenu}
                title="Menu"
                color="#841584"
                accessibilityLabel="Explore site options"
              />
            }
            onRequestClose={hideMenu}
          >
            <MenuItem onPress={hideMenu}>Tutorial</MenuItem>
            <MenuItem onPress={hideMenu}>About</MenuItem>
          </Menu>
        </View>
      </View>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
      <TextInput style={{ height: 60 }} placeholder="Select video source:" />
      <VideoScreen />
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
