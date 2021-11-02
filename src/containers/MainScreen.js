import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

// components to use once basic functionality is established:
// import MultiSlider from "@ptomasroos/react-native-multi-slider";
// import ModalDropdown from "react-native-modal-dropdown";

// import my components:
import VideoScreen from "../components/VideoScreen";
import About from "../components/About";

export default function MainScreen({ navigation }) {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  // if (loading) return <Text>Loading...</Text>;

  return (
    <View style={styles.mainBox}>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
      <TextInput style={{ height: 60 }} placeholder="Select video source:" />

    </View>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "orange",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 360,
    height: 680,
  },
});
