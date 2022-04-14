import React from "react";

import { FlatList } from "react-native";
import { BASICELECTTOPICS } from "../data/BasicElectData";
import {TopicsComp, FocusedStatusBar} from "../components/";

const BasicElectTopics = ({ navigation }) => {
  const renderTopics = ({ item }) => (
      <TopicsComp
        topic={item.topic}
        imageLink={require('../assets/LessonPics/resistors2.png')}
        onSelect={() => navigation.push("Topics Content", { data: item })}
      />
    );
  
  return (
    <>
    <FocusedStatusBar/>
      <FlatList
        keyExtractor={(item) => item.id}
        data={BASICELECTTOPICS}
        renderItem={renderTopics}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default BasicElectTopics;
