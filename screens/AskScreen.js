import React, { useState } from "react";
import { Linking, View, Text, StyleSheet, TouchableOpacity, Dimensions, } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Color from "../constants/Color";
import { FocusedStatusBar } from "../components";

const AskScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  const sendMail = () => {
    setIsEnabled(false);
    return Linking.openURL("mailto: ");
  };
  return (
    <>
    <FocusedStatusBar/>
      <View style={styles.container}>
        {isEnabled && (
          <TouchableOpacity onPress={sendMail}>
            <MaterialIcons name="email" size={60} color="#fff" />
            <Text style={styles.textStyle}>Tap to send an e-mail</Text>
          </TouchableOpacity>
        )}
        {!isEnabled && (
          <View>
            <Text style={styles.textDisabled}>e-mail active</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.goBackText}>Go Back</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "open-sans-bold",
    fontSize: Dimensions.get("window").width < 350 ? 20 : 25,
    color: "#fff",
  },
  textDisabled: {
    fontFamily: "open-sans-bold",
    fontSize: 40,
    color: "gray",
    marginBottom: 20,
  },
  goBackText: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "open-sans-bold",
  },
});
export default AskScreen;
