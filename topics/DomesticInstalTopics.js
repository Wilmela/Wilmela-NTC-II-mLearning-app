import React from "react";
import { FlatList } from "react-native";
import {TopicsComp, FocusedStatusBar} from "../components/";
import { DOMESTICINSTALTOPICS } from "../data/DomInstallCousreData";

const DomesticInstalTopics = (props) => {
  const renderTopics = ({item}) => {
    return (
      <TopicsComp
        topic={item.topic}
        imageLink={require('../assets/LessonPics/Domestic/conduit.jpeg')}
        onSelect={() => props.navigation.push("Topics Content", { data:item }) }
      />
    );
  };
  return (
    <>
    <FocusedStatusBar/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={DOMESTICINSTALTOPICS}
        renderItem={renderTopics}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};
export default DomesticInstalTopics;
