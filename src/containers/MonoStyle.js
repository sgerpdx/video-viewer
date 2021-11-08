import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

// video:
import { Video, AVPlaybackStatus } from "expo-av";

export default function MonoStyle() {
  const [loading, setLoading] = useState(true);
  const video = useRef(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <Text>Loading...</Text>;

  return (
    <>
      <View style={styles.monoBox}>
        <View style={styles.headerBox}>
          <Text>Single-Component Formatting Test</Text>
          <Button title="Click Me Baby" />
        </View>
        <ScrollView style={styles.videoBox}>
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
          />
        </ScrollView>
        <View style={styles.footerBox}>
          <Text>Australia</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  monoBox: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "lavender",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    width: 520,
  },
  headerBox: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    width: 480,
    height: 120,
  },
  videoBox: {
    backgroundColor: "lightBlue",
    width: 480,
  },
  footerBox: {
    backgroundColor: "lime",
    justifyContent: "center",
    alignItems: "center",
    width: 480,
  },
});
