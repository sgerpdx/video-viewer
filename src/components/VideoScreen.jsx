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
    <View style={styles.outerBox}>
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
    </View>
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
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "flex-start",
    padding: 10,
    width: 160,
    height: 160,
  },
  colorSquare: {
    backgroundColor: "yellow",
    width: 40,
    height: 40,
    borderWidth: 4,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  controlBox: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 160,
    height: 160,
  },
  videoZone: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
