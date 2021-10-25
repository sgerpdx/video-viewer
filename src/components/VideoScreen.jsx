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
import { Video, AVPlaybackStatus } from "expo-av";
import { Asset, useAssets } from "expo-asset";

export default function VideoScreen() {
  // expo video starter code:
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [assets, error] = useAssets(require("../../assets/Meadow-July-21.mp4"));

  return (
    <ScrollView>
      {/* <Video
            source={{
              uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            ref={(ref) => {
              this.player = ref;
            }}
            onBuffer={this.onBuffer}
            onError={this.videoError}
            style={styles.videoZone}
          /> */}

      <Video
        ref={video}
        style={styles.video}
        source={require("../../assets/Meadow-July-21.mp4")}
        // source={{
        //   uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        // }}
        useNativeControls
        resizeMode="Video.RESIZE_MODE_CONTAIN"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
      {/* <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{ width: 240, height: 240 }}
          /> */}
      <Button
        title="Play/Pause"
        color="green"
        accessibilityLabel="Play or pause the video."
      />
      {/* <MultiSlider min="0" max="10" step="1" /> */}
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
