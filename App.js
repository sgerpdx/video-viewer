// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

// RN screen navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// my components for this app:
import MainScreen from "./src/containers/MainScreen";
import About from "./src/components/About";

// menu
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";

const Stack = createNativeStackNavigator();
// at present the screen navigation using buttons in the MainScreen and About components is not working with the reason unknown

export default function App(navigation) {
  // menu starter code:
  const [visible, setVisible] = useState(false);
  const hideMenu = () => {
    setVisible(false);
  };
  const showMenu = () => setVisible(true);

  return (
    <NavigationContainer>
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
        <View style={styles.contentBox}>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        </View>
      </View>
    </NavigationContainer>
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
    fontSize: 24,
  },
  iconRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: 120,
  },
  contentBox: {
    flex: 5,
    width: 360,
    height: 680,
  },
});
