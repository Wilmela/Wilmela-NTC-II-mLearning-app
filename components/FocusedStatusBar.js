import React from "react";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar = () => {
  const isFocused = useIsFocused();
  return isFocused ? 
  <StatusBar animated={true} 
    barStyle="dark-content" 
    translucent={true} 
    backgroundColor="transparent" 
  /> 
  : null;
};

export default FocusedStatusBar;
