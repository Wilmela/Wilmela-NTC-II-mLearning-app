import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  Dimensions,
} from "react-native";
import Color from '../constants/Color';

const screenWidth = Dimensions.get("window").width;

const QuizFinish = ({ route, navigation }) => {
  const { score, missed, questions } = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        resizeMode="contain"
        source={require("../assets/finish.png")}
      />
      <Text style={{ ...styles.text, ...{ color: "green" } }}>
        You scored : {score}
      </Text>
      <Text style={styles.text}>
        You Missed : {missed} out of {questions}
      </Text>

      <TouchableHighlight
        underlayColor="steelblue"
        onPress={() => navigation.navigate("HomeRT")}
        style={styles.button}
      >
        <Text style={styles.finishText}>Finish Quiz</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:Color.background,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: screenWidth < 350 ? 16 : 20,
    marginTop: 20,
  },
  finishText: {
    fontFamily: "open-sans-bold",
    fontSize: screenWidth < 350 ? 25 : 30,
  },
  imageStyle: {
    width: screenWidth < 350 ? 200 : 300,
    height: Dimensions.get("window").height < 600 ? 200 : 300,
    borderRadius: 10,
  },
});
export default QuizFinish;
