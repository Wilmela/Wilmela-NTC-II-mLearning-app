import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Linking,
  SafeAreaView
} from "react-native";
import { FocusedStatusBar } from "../components";
import Color from "../constants/Color";

const screenHeight = Dimensions.get("window").height;

const AboutScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: 1}}>
    <FocusedStatusBar/>
    <ScrollView>
      <View style={styles.container}>
        <Text
          style={{ textAlign: "center", paddingVertical: 5, color: "#fff" }}
        >
          Version 1.0.0
        </Text>
        <Image
          style={{
            width: "100%",
            height: screenHeight < 600 ? 150 : 300,
            resizeMode: "contain",
          }}
          source={require("../assets/img/TheBasics.webp")}
        />
        <Text style={styles.description}>
          This app was designed to assist electrical installation works students
          in Technical Colleges in Rivers State gain access to their course
          curriculum contents any where and any time !
        </Text>
        <Text style={styles.designer}>Developer: Chukumela, Reuben Wilson</Text>
        <Text
          style={styles.designer}
          onPress={() => Linking.openURL("tel: +2348038888192")}
        >
          Phone: +234 803 8888 192{" "}
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL( "mailto: chukumelawilson@gmail.com?subject=Hello%20sir" ) }
        >
          <Text style={styles.designer}>email: chukumelawilson@gmail.com</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    height: screenHeight,
    backgroundColor:Color.background,
  },
  description: {
    fontFamily: "open-sans-bold",
    fontSize: screenHeight < 600 ? 15 : 20,
    marginHorizontal: 10,
    textAlign: "left",
    color: "#fff",
  },
  designer: {
    marginTop: screenHeight < 600 ? 10 : 30,
    fontFamily: "open-sans-bold",
    fontSize: screenHeight < 600 ? 13 : 15,
    marginHorizontal: 10,
    textAlign: "right",
    color: "#000",
    lineHeight: 15,
  },
});
export default AboutScreen;
