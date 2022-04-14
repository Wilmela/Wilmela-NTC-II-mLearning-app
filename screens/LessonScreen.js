import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {LessonComp, FocusedStatusBar} from "../components/";
import Color from "../constants/Color";

const LessonScreen = ({ navigation }) => {

  return (
    <>
    <FocusedStatusBar/>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <LessonComp
          link={require("../assets/LessonPics/resistors2.png")}
          onSelect={() => navigation.navigate("Basic Electricity Topics")}
          title="Basic Electricity"
        />

        <LessonComp
          link={require("../assets/LessonPics/Domestic/conduit.jpeg")}
          onSelect={() => navigation.navigate("Domestic Installation Topics")}
          title="Domestic Installation"
        />

        <LessonComp
          link={require("../assets/LessonPics/industrialImg/industrial.webp")}
          onSelect={() => navigation.navigate("Industrial Installation Topics")}
          title="Industrial Installation"
        />

        <LessonComp
          link={require("../assets/LessonPics/cableJointing/western-union.png")}
          onSelect={() => navigation.navigate("Cable Jointing Topics")}
          title="Cable Jointing"
        />

        <LessonComp
          link={require("../assets/LessonPics/battery/votalicCell.webp")}
          onSelect={() => navigation.navigate("Battery Charging Topics")}
          title="Battery Charging"
        />

        <LessonComp
          link={require("../assets/LessonPics/winding/stator-winding.jpeg")}
          onSelect={() => navigation.navigate("Winding of Electrical Machines Topics") }
          title="Winding of Machines"
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
export default LessonScreen;
