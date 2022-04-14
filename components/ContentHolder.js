import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Zoomable from "../components/Zoomable";

const ContentHolder = (props) => {
  return (
    <View {...props} style={{ ...styles.container, ...props.style }}>
      <View style={styles.imageContainer}>
        <Zoomable
          link={props.link}
          style={{ ...styles.imageStyle, ...props.style }}
        />
      </View>
      <View>{props.children}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    padding: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  imageContainer: {
    marginHorizontal: "2%",
    borderColor: "gray",
    borderWidth: 1,
    overflow: "hidden",
    width: "96%",
  },
  imageStyle: {
    height: 200,
    width: "100%",
  },
});
export default ContentHolder;
