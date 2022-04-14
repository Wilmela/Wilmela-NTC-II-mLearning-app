import React from "react";
import { FlatList } from "react-native";
import { BATTERYCHARGINGTOPICS } from "../data/BatteryChargingData";
import {TopicsComp, FocusedStatusBar} from "../components/";

const BatteryChargingTopics = (props) => {
  const renderTopics = ({item}) => {
    return (
      <TopicsComp
        topic={item.topic}
        imageLink={require("../assets/LessonPics/battery/DanielCell.webp")}
        onSelect={() => props.navigation.push("Topics Content", { data: item })}
      />
    );
  };
  return (
    <>
    <FocusedStatusBar/>
      <FlatList
        keyExtractor={(item) => item.id}
        data={BATTERYCHARGINGTOPICS}
        renderItem={renderTopics}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default BatteryChargingTopics;
