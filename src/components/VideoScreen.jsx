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
// this is RNs native SDK video API:
//
// import { Video, AVPlaybackStatus } from "expo-av";
import { Asset, useAssets } from "expo-asset";

export default function VideoScreen() {
  const [videoSource, setVideoSource] = useState("");
  const [imageBool, setImageBool] = useState(true);

  // expo video starter code:
  const video = useRef(null);
  const [status, setStatus] = useState({});
  // const [assets, error] = useAssets(require("../../assets/Meadow-July-21.mp4"));
  const [assets, error] = useAssets([
    require("../../assets/blob-ross-triangles.jpg"),
    require("../../assets/blob-ross-green-planet.jpg"),
  ]);

  const videoSelection = (vid) => {
    setVideoSource(vid);
    setImageBool(false);
  };

  useEffect(() => {
    setVideoSource("../../assets/blob-ross-triangles.jpg");
  }, []);

  console.log("video source:", videoSource);

  return (
    <ScrollView>
      <Text>Please select video source:</Text>
      <Button
        title="Select"
        color="yellow"
        accessibilityLabel="Select video source."
        onPress={() =>
          videoSelection("../../assets/blob-ross-green-planet.jpg")
        }
      />
      <Image
        //this following line needs to be fixed to conform to require syntax, but it is unclear why the current state-management system does not work that way:
        source={
          imageBool
            ? require("../../assets/blob-ross-triangles.jpg")
            : require("../../assets/blob-ross-green-planet.jpg")
        }
        style={{ width: 120, height: 120 }}
      />

      <Button
        title="Play/Pause"
        color="green"
        accessibilityLabel="Play or pause the video."
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  videoZone: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
