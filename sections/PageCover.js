import React from "react";
import { StyleSheet, View, Dimensions, ImageBackground } from "react-native";
import Menu from "../sections/Menu";
import Header from "../components/Header";

const PageCover = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground resizeMode="cover" style={styles.imageStyle} source={require("../assets/img/cover.jpeg")} >
          <Header />
          <Menu/>
        </ImageBackground>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, },
  imageContainer: { width: Dimensions.get("window").width, },
  imageStyle: { width: "100%", height: "100%", },
});
export default PageCover;
