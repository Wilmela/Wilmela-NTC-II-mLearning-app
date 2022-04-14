import React, { useState } from "react";

import ScreensManager from "./screens/ScreensManager";
import { enableScreens } from "react-native-screens";
import { useKeepAwake } from "expo-keep-awake";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

enableScreens(true);

const fetchFont = () => {
  return Font.loadAsync({
    "open-sans-bold": require("./assets/font/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/font/OpenSans-Regular.ttf"),
  });
};
export default function App() {
  useKeepAwake();
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => {
          console.log(`error ${err}`);
        }}
      />
    );
  }
  return <ScreensManager />;
}
