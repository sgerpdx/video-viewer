import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, ScrollView, Image, Button } from "react-native";
// RN video:
//import Video from 'react-native-video';
// Expo AV:
import { Video, AVPlaybackStatus } from "expo-av";


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
  const [naturalSize, setNaturalSize] = useState({
    width: 180,
    height: 240,
  });

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
    console.log('NS:', naturalSize);
  }, []);

  console.log("video source:", videoSource);
  console.log("propped up SAWRSSS:", { painting });

  if (loading) return <Text>Loading...</Text>;

  return (
    <ScrollView>
      <Text>Please select video source:</Text>
      <Button
        style={styles.flexThing}
        title="Select"
        color="yellow"
        accessibilityLabel="Select video source."
        onPress={() =>
          videoSelection("../../assets/blob-ross-green-planet.jpg")
        }
      />
      {/* <Image
        source={
          imageBool
            ? require("../../assets/blob-ross-triangles.jpg")
            : require("../../assets/blob-ross-green-planet.jpg")
        }
        style={{ width: 120, height: 120 }}
      /> */}
      <Video
        ref={video}
        style={styles.videoZone}
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls="true"
        resizeMode="Video.RESIZE_MODE_CONTAIN"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        onReadyForDisplay={(naturalSize) => setNaturalSize(() => naturalSize)}
      />
      {/* <Button
        title="Play/Pause"
        color="green"
        accessibilityLabel="Play or pause the video."
      /> */}
    </ScrollView>
  );
}
// currently video width is the problem
// this formatting was causing the component to be in front of other components:
const styles = StyleSheet.create({
  videoZone: {
    position: "absolute",
  },
  flexThing: {
    flex: 1,
    position: "absolute",
    width: 240,
  },
});
