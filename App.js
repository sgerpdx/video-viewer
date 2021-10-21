// import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
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
import { Video, AVPlaybackStatus } from "expo-av";

export default function App() {
  // expo video starter code:
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.outerBox}>
      <View style={styles.titleRow}>
        <Text style={styles.generalText}>Video Viewer</Text>
        <View style={styles.iconRow}>
          {" "}
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{ width: 24, height: 24 }}
          ></Image>
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{ width: 24, height: 24 }}
          ></Image>
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{ width: 24, height: 24 }}
          ></Image>
        </View>
      </View>
      <TextInput style={{ height: 60 }} placeholder="Select video source:" />
      <ScrollView>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls
          resizeMode="contain"
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
    width: 360,
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
});
