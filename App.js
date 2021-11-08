// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

// RN screen navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// my components for this app:
import MainScreen from "./src/containers/MainScreen";
import About from "./src/components/About";
import MonoStyle from "./src/containers/MonoStyle";

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
        <View style={styles.titleBox}>
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
        <MonoStyle />
        {/* <View style={styles.contentBox}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        </View> */}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  outerBox: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "blue",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    width: 540,
  },
  titleBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 480,
  },
  nameBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 240,
  },
  iconBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 240,
  },
});
