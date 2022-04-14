import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Color from "../constants/Color";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width:'100%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.headerColor,
    borderBottomWidth: 1,
    opacity: 0.9,
    height: Dimensions.get("screen").height / 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    color: "#fff",
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
});
Header.defaultProps = {
  title: "Electrical Installation Works",
};
export default Header;
