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
  // expo video starter code:
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  // const [assets, error] = useAssets(require("../../assets/Meadow-July-21.mp4"));
  const [assets1, error1] = useAssets(
    require("../../assets/blob-ross-triangles.jpg")
  );
  const [assets2, error2] = useAssets(
    require("../../assets/blob-ross-green-planet.jpg")
  );

  return (
    <ScrollView>
      <Image
        source={require("../../assets/blob-ross-triangles.jpg")}
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
