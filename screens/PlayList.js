import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { FocusedStatusBar } from "../components";
import Color from "../constants/Color";
import AUDIOLINKS from "../data/audioData";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const PlayList = ({ navigation }) => {
  const renderLinks = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.linkStyle}
          onPress={() =>
            navigation.navigate("PlayerScreen", {
              screen: "Player",
              params: { audioLink: item.source, fileName: item.title },
            })
          }
        >
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
    <FocusedStatusBar/>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={AUDIOLINKS}
          renderItem={renderLinks}
          style={{ width: "100%" }}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: screenHeight > 600 ? 25 : 15,
    backgroundColor: Color.background,
  },
  linkStyle: {
    flex: 1,
    alignItems: "center",
    marginVertical: 15,
    marginHorizontal: screenHeight > 600 ? 20 : 10,
    borderWidth: screenHeight > 600 ? 0.5 : 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingVertical: screenHeight > 600 ? 25 : 20,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: screenWidth > 350 ? 20 : 15,
    color: "#fff",
  },
});
export default PlayList;
