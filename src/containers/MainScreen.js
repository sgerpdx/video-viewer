import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

// components to use once basic functionality is established:
import ModalDropdown from "react-native-modal-dropdown";

// import my components:
import VideoScreen from "../components/VideoScreen";
import About from "../components/About";

export default function MainScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [imageSource, setImageSource] = useState("");
  const [tracker, setTracker] = useState(0);

  useEffect(() => {
    setLoading(false);
  }, []);

  const optionsArr = ["triangles", "green planet"];

  const imageToggle = (e) => {
    setImageSource(optionsArr[e]);
    setTracker((tracker) => tracker + 1);
  };

  console.log("imgSRC:", imageSource);
  console.log("TRK:", tracker);

  if (loading) return <Text>Loading...</Text>;

  return (
    <View style={styles.mainBox}>
      <Button
        style={styles.flexThing}
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
      <TextInput
        style={[styles.flexThing, { height: 60 }]}
        placeholder="Select video source:"
      />
      <ModalDropdown
        defaultValue={"select video source"}
        onSelect={imageToggle}
        options={optionsArr}
      />
      <VideoScreen
        style={styles.flexThing}
        painting={imageSource}
        count={tracker}
      />
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
    justifyContent: "flex-start",
    width: 360,
    height: 680,
  },
  flexThing: {
    flex: 1,
  },
});
