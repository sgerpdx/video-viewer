// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import MainScreen from "./src/containers/MainScreen";
import About from "./src/components/About";
// Menu
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";

const Stack = createNativeStackNavigator();

export default function App() {
  // menu starter code:
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  return (
    <NavigationContainer style={styles.outerBox}>
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
