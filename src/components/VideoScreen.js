import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, ScrollView, Image, Button } from "react-native";

// import { Video, AVPlaybackStatus } from "expo-av";
import { Asset, useAssets } from "expo-asset";

export default function VideoScreen({ painting, count }) {
  const [loading, setLoading] = useState(true);
  // this variable is not working as intended to toggle asset:
  const [videoSource, setVideoSource] = useState("");

  // ...so a Boolean is being used for testing purposes:
  const [imageBool, setImageBool] = useState(true);

  // expo video starter code:
  const video = useRef(null);
  const [status, setStatus] = useState({});

  // static assets import -- using images instead of videos to test non-playback functionality of app:
  const [assets, error] = useAssets([
    require("../../assets/blob-ross-triangles.jpg"),
    require("../../assets/blob-ross-green-planet.jpg"),
  ]);

  const videoSelection = (vid) => {
    setVideoSource(vid);
    setImageBool(false);
  };

  // this is changing state, but there are issues using state to change the image source below
  useEffect(() => {
    setVideoSource("../../assets/blob-ross-triangles.jpg");
    setLoading(false);
  }, []);

  console.log("video source:", videoSource);
  console.log("propped up SAWRSSS:", { painting });

  if (loading) return <Text>Loading...</Text>;

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

// this formatting was causing the component to be in front of other components:
// const styles = StyleSheet.create({
//   videoZone: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
// });
