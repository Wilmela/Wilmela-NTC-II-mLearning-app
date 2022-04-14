import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import Color from "../constants/Color";
import { FontAwesome5, Entypo, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  let iconSize = 40;
  const iconColor = "#fff";

  let buttonRowStyle = styles.buttonRow;
  if (Dimensions.get("window").height < 600) {
    buttonRowStyle = styles.buttonRowBig;
    iconSize = 30;
  }
  return (
    <View style={styles.container}>
      <View style={buttonRowStyle}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("LessonRT")} >
          <Entypo name="open-book" size={iconSize} color={iconColor} />
          <Text style={styles.textStyle}>LESSON</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("PastQuestionsRT")} >
          <Text style={styles.textStyle}>NABTEB PAST EXAMS</Text>
        </TouchableOpacity>
      </View>

      <View style={buttonRowStyle}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Ask")} >
          <MaterialIcons name="email" size={iconSize} color={iconColor} />
          <Text style={styles.textStyle}>ASK</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("BlogRT")} >
          <FontAwesome5 name="blog" size={iconSize} color={iconColor} />
          <Text style={styles.textStyle}>BLOG</Text>
        </TouchableOpacity>
      </View>

      <View style={buttonRowStyle}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("QuizRT")} >
          <FontAwesome5
            name="question-circle"
            size={iconSize}
            color={iconColor}
          />
          <Text style={styles.textStyle}>QUIZ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("AboutRT")} >
          <Entypo name="info" size={iconSize} color={iconColor} />
          <Text style={styles.textStyle}>ABOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    height: Dimensions.get("window").height / 11, // 80,
    marginVertical: 2,
    marginHorizontal: 4,
  },
  buttonRowBig: {
    flexDirection: "row",
    alignItems: "center",
    height: Dimensions.get("window").height / 9.5, // 80,
    marginVertical: 2,
    marginHorizontal: 4,
  },
  buttonStyle: {
    backgroundColor: Color.headerColor,
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 5,
    marginLeft: 2,
    marginRight: 2,
    opacity: 0.9,
  },
  textStyle: {
    fontSize: 12,
    color: "#fff",
    fontFamily: "open-sans-bold",
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});
export default Menu;
