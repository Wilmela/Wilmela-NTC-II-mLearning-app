import "react-native-gesture-handler";

import React from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  Home,
  AboutScreen,
  AskScreen,
  BlogScreen,
  LessonScreen,
  PastQuestionsScreen,
  QuizScreen,
  AudioPlayer,
  PlayList,
} from "./";

import {
  BasicElectTopics,
  BatteryChargingTopics,
  CableJointingTopics,
  DomesticInstalTopics,
  IndustrialInstalTopics,
  WindingOfElectMachinesTopics,
} from "../topics/";

import TopicsContent from "../topics/TopicsContent";

import Color from "../constants/Color";

import Quiz from "../Quiz/Quiz";
import QuizFinish from "../Quiz/QuizFinish";
import { Platform } from "react-native";

import screenOption from "../components/screenOption";
import { Ionicons } from "@expo/vector-icons";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButtonComp from "../components/HeaderButtonComp";

const { Navigator, Screen } = createStackNavigator();

const theme = {
  ...DefaultTheme,
  color:{
    ...DefaultTheme.colors,
    background: 'transparent'
  }
}

const ScreensManager = () => {
  return (
    <Navigator initialRouteName="Home" screenOptions={screenOption}>
      <Screen name="HomeRT" component={Home} options={{ headerShown: false }} />
      <Screen
        name="LessonRT"
        component={LessonScreen}
        options={{ title: "Subjects", }}
      />
      <Screen
        name="PastQuestionsRT"
        component={PastQuestionsScreen}
        options={{ title: "Past Questions" }}
      />
      <Screen name="Ask" component={AskScreen} />
      <Screen name="BlogRT" component={BlogScreen} options={{ title: "Trends" }} />
      <Screen name="QuizRT" component={QuizScreen} options={{ title: "Quiz" }} />
      <Screen name="AboutRT" component={AboutScreen} options={{ title: "About" }} />

      <Screen
        name="Topics Content"
        component={TopicsContent}
        options={ ({ route }) => ({ title: route.params.topic }) }
      />
      <Screen name="Basic Electricity Topics" component={BasicElectTopics}/>
      <Screen name="Battery Charging Topics" component={BatteryChargingTopics} />
      <Screen name="Cable Jointing Topics" component={CableJointingTopics} />
      <Screen name="Domestic Installation Topics" component={DomesticInstalTopics} />
      <Screen name="Winding of Electrical Machines Topics" component={WindingOfElectMachinesTopics} />
      <Screen name="Industrial Installation Topics" component={IndustrialInstalTopics} />
      <Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />

      <Screen name="QuizFinish" component={QuizFinish} options={{ headerShown: false }} />
    </Navigator>
  );
};

//Drawer Navs
const AudioPlayerStack = ({ navigation }) => {
  return (
    <Navigator screenOptions={screenOption}>
      <Screen name="Player" component={AudioPlayer}
        options={{
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={HeaderButtonComp}>
                <Item title="menu" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
              </HeaderButtons>
            );
          },
        }}
      />
    </Navigator>
  );
};
const PlayListStack = ({ navigation }) => {
  return (
    <Navigator screenOptions={screenOption}>
      <Screen name="PlayList" component={PlayList}
        options={{
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={HeaderButtonComp}>
                <Item title="menu" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
              </HeaderButtons>
            );
          },
        }}
      />
    </Navigator>
  );
};
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="PlayListScreen">
      <Drawer.Screen name="PlayerScreen" component={AudioPlayerStack}
        options={{
          drawerIcon: ({ color }) => {
            return <Ionicons name="ios-headset-outline" size={20} color={color} />;
          },
          drawerLabel: "Audio Player",
          
        }}
      />
      <Drawer.Screen name="PlayListScreen" component={PlayListStack}
        options={{
          drawerLabel: "PlayList",
        }}
      />
    </Drawer.Navigator>
  );
};

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator activeColor="white" shifting={true} initialRouteName="HomeScreen" >
        <Tab.Screen name="HomeScreen" component={ScreensManager}
          options={{
            tabBarIcon: ({ color }) => {
              return <Ionicons name="home" size={25} color={color} />;
            },
            tabBarColor: Color.headerColor,
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen name="AudioPlayerScreen" component={DrawerNavigator}
          options={{
            tabBarIcon: ({ color }) => {
              return <Ionicons name="headset" size={25} color={color} />;
            },
            tabBarColor: Color.headerColor,
            tabBarLabel: "Audio Player",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
