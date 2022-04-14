import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Alert,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import {FocusedStatusBar} from '../components'
import { useKeepAwake } from "expo-keep-awake";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const AudioPlayer = ({ route }) => {
  useKeepAwake();

  const navigation = useNavigation();
  const { audioLink, fileName } = route.params || "";

  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function load() {}
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(audioLink); // Load Sound
    setSound(sound);
    //Sound playing
    setIsPlaying(true);
    !isPlaying ? await sound.playAsync() : await sound.pauseAsync();

    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined; //Unloading sound
  }, [sound, audioLink, fileName]);

  const gotoPlayList = () => {
    navigation.navigate("PlayListScreen");
  };
  return (
    <>
    <FocusedStatusBar/>
      <View style={styles.container}>
        <ImageBackground
          style={styles.cover}
          source={require("../assets/download.png")}
        >
          <Text style={styles.title}>{fileName}</Text>
          {audioLink ? (
            <View>
              <Ionicons
                style={styles.icons}
                name={!isPlaying ? "play" : "pause"}
                size={screenWidth > 350 ? 30 : 20}
                color="#fff"
                onPress={playSound}
              />
            </View>
          ) : (
            Alert.alert("Stop!", "Load up an audio file from the playlist", [
              { text: "okay", style: "destructive", onPress: gotoPlayList },
            ])
          )}
        </ImageBackground>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ccc",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: screenWidth > 350 ? 24 : 19,
    marginTop: 10,
    color: "#fff",
    paddingHorizontal: screenWidth > 350 ? 5 : 0,
  },
  cover: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    aspectRatio: 1,
  },
  icons: {
    backgroundColor: "#777",
    padding: 20,
    borderRadius: 5,
    position: "relative",
    top: screenHeight > 600 ? 260 : 100,
  },
});
export default AudioPlayer;
