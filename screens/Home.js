import React from "react";
import {SafeAreaView } from "react-native";
import PageCover from "../sections/PageCover";

import { FocusedStatusBar } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <PageCover />
    </SafeAreaView>
  );
};
export default Home;
