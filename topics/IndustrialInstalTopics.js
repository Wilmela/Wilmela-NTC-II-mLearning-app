import React from "react";
import { FlatList } from "react-native";
import {TopicsComp, FocusedStatusBar} from "../components/";
import { INDUSTRIALINSTALTOPICS } from "../data/IndustrialInstallCourseData";

const IndustrialInstalTopics = (props) => {
  const renderTopics = ({item}) => {
    return (
      <TopicsComp
        topic={item.topic}
        imageLink={require("../assets/LessonPics/industrialImg/industrial.webp")}
        onSelect={() => props.navigation.push("Topics Content", { data: item })}
      />
    );
  };
  return (
    <>
    <FocusedStatusBar/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={INDUSTRIALINSTALTOPICS}
        renderItem={renderTopics}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};
export default IndustrialInstalTopics;
