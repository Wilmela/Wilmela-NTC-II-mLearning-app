import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions, ImageBackground, View, } from "react-native";

const LessonComp = (props) => {
 
  return (
    <TouchableOpacity
      style={{ ...styles.lessonSubjects, ...props.style }}
      onPress={props.onSelect}
    >
      <View style={styles.imageContainer}>
        <ImageBackground resizeMode="cover" style={styles.imageStyle} source={props.link}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {props.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({

  lessonSubjects: {
    borderColor: "#ccc",
    borderWidth: 1,
    width: "90%",
    marginVertical: 10,
    height: Dimensions.get("window").height / 4,
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  imageStyle: {
    flex: 1,
    justifyContent: "flex-end",
  },
  textContainer: {
    paddingLeft: 10,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  text: {
    color: "#fff",
    fontSize: Dimensions.get("window").width < 350 ? 16 : 23,
    fontFamily: "open-sans-bold",
    padding: 5,
  },
});
export default LessonComp;
