import React from "react";
import { View, FlatList } from "react-native";
import {TopicsComp, FocusedStatusBar} from "../components/";
import { WINDINGOFELECTMACHINESTOPICS } from "../data/WindingOfElectMachinesData";

const WindingOfElectMachines = (props) => {
  const renderTopics = ({ item }) => {
    return (
      <TopicsComp
        topic={item.topic}
        imageLink={require("../assets/LessonPics/winding/dc-motor.png")}
        onSelect={() => props.navigation.push("Topics Content", { data: item })}
      />
    );
  };
  return (
    <>
    <FocusedStatusBar/>
      <FlatList
        keyExtractor={(item) => item.id}
        data={WINDINGOFELECTMACHINESTOPICS}
        renderItem={renderTopics}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};
export default WindingOfElectMachines;
