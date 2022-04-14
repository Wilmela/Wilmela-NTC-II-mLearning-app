import React from "react";
import { StyleSheet, Dimensions, FlatList, View} from "react-native";
import { OurImages } from "../data/ImageData";
import Zoomable from "../components/Zoomable";
import { FocusedStatusBar } from "../components";

const screen = Dimensions.get("window");
const PastQuestionsScreen = () => {
  const renderImages = (itemData) => {
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Zoomable link={itemData.item.url} style={styles.imageStyle} />
        </View>
      </View>
    );
  };
  return (
    <>
      <FocusedStatusBar />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={OurImages}
        renderItem={renderImages}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imageView: {
    width: screen.width,
    aspectRatio: 0.7,
  },
  imageStyle: {
    resizeMode: "contain",
    width: "100%",
  },
});
export default PastQuestionsScreen;
