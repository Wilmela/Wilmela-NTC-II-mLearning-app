import { Platform, Dimensions } from "react-native";
import Color
 from "../constants/Color";
export default {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Color.headerColor : "white",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    height: Dimensions.get("window").height > 600 ? 90 : 60,
  },
  headerTintColor: Platform.OS === "android" ? "white" : Color.headerColor,
  headerTitleAlign: "center",
};