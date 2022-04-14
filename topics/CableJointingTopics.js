import React from "react";
import { FlatList } from "react-native";
import {TopicsComp, FocusedStatusBar} from "../components/";
import { CABLEJOINTINGTOPICS } from "../data/CableJointing";

const CableJointingTopics = (props) => {
  const renderTopics = ({item}) => {
    return (
      <TopicsComp
        topic={item.topic}
        imageLink={require("../assets/LessonPics/cableJointing/western-union.png")}
        onSelect={() => props.navigation.push("Topics Content", { data: item })}
      />
    );
  };
  return (
    <>
      <FocusedStatusBar />
      <FlatList
        keyExtractor={(item) => item.id}
        data={CABLEJOINTINGTOPICS}
        renderItem={renderTopics}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};
export default CableJointingTopics;
