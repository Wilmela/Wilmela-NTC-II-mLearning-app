import React from "react";
import { View, Text, StyleSheet, LogBox, ScrollView } from "react-native";
import Color from "../constants/Color";

const TopicsContent = ({ navigation, route }) => {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  const { data } = route.params;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topicBox}>
          <Text style={styles.topicText}>{data.topic}</Text>
        </View>
        <ScrollView contentContainerStyle={{ alignItems: "center" }} showsVerticalScrollIndicator={false}>
          <Text>{data.content}</Text>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor:Color.background,
  },
  topicBox: {
    height: 40,
    justifyContent: "center",
    paddingLeft: 20,
  },
  topicText: {
    fontSize: 21,
    fontFamily: "open-sans-bold",
    color: Color.headerColor,
  },

});
export default TopicsContent;
