import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Color from "../constants/Color";

const screen = Dimensions.get("window");

const TopicsComp = (props) => {
  return (
    <View {...props} style={styles.container}>
        <TouchableOpacity style={styles.itemStyle} onPress={props.onSelect}>
            <ImageBackground source={props.imageLink} style={{ width: "100%", height: "100%", justifyContent:'center', alignItems:'center' }} resizeMode='cover' >
                <Text style={styles.topicTextStyle}>{props.topic}</Text>
            </ImageBackground>
        </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Color.background,
    paddingHorizontal: "5%",
    height: screen.height > 600 ? 200 : 120,
  },
  itemStyle: {
    flex: 1,
    width:'100%',
    height:'100%',
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    overflow:'hidden',

    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.28,

    elevation: 3,
  },

  topicTextStyle: {
    fontFamily: "open-sans-bold",
    fontSize: screen.width > 350 ? 25 : 15,
    textShadowColor:'black',
    textShadowOffset:{width:0, height: 2},
    textShadowRadius: 5,
    elevation:3,
  
    color:'red'
  },
});

export default TopicsComp;
