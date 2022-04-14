import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {FocusedStatusBar, GeneralSubjectLayout } from "../components";
import { BEQuiz, DIQuiz, IIQuiz, CJQuiz, BCQuiz, EMWQuiz } from "../data/quizQuestions/QuizQuestions";
import Color from "../constants/Color";

const QuizScreen = ({ navigation }) => {
  return (
    <>
    <FocusedStatusBar/>
      <ScrollView>
        <View style={styles.container}>
          <GeneralSubjectLayout
            link={require("../assets/questionMark.jpeg")}
            style={{ backgroundColor: "#f5428d" }}
            onSelect={() => navigation.navigate("Quiz", { questions: BEQuiz.questions, }) }
            title="Basic Electricity"
          />

          <GeneralSubjectLayout
            style={{ backgroundColor: "#f54242" }}
            link={require("../assets/questionMark.jpeg")}
            onSelect={() => navigation.navigate("Quiz", { questions: DIQuiz.questions, }) }
            title="Domestic Installation"
          />

          <GeneralSubjectLayout
            style={{ backgroundColor: "#f5a442" }}
            link={require("../assets/questionMark.jpeg")}
            onSelect={() => navigation.navigate("Quiz", { questions: IIQuiz.questions, }) }
            title="Industrial Installation"
          />

          <GeneralSubjectLayout
            style={{ backgroundColor: "#f5d142" }}
            link={require("../assets/questionMark.jpeg")}
            onSelect={() => navigation.navigate("Quiz", { questions: CJQuiz.questions, }) }
            title="Cable Jointing"
          />

          <GeneralSubjectLayout
            style={{ backgroundColor: "#368dff" }}
            link={require("../assets/questionMark.jpeg")}
            onSelect={() => navigation.navigate("Quiz", { questions: BCQuiz.questions, }) }
            title="Battery Charging"
          />

          <GeneralSubjectLayout
            style={{ backgroundColor: "#41d95d" }}
            link={require("../assets/questionMark.jpeg")}
            onSelect={() => navigation.navigate("Quiz", { questions: EMWQuiz.questions, }) }
            title="Winding of Machines "
          />
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:Color.background,
  },
});
export default QuizScreen;
