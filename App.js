import React from "react";
import { View, StatusBar } from "react-native";

import { createSwitchNavigator, createBottomTabNavigator } from "react-navigation";

import AppBar from "./components/AppBar";
import Login from "./components/Login";
import PicCard from "./components/PicCard";
import Profile from "./components/Profile";
import UploadPic from "./components/UploadPic";

const MainStack = createSwitchNavigator({
  login: Login,
  mainApp: TabStack
});

const TabStack = createBottomTabNavigator({
  profile: Profile,
  feed: PicCard,
  upload: UploadPic
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{ paddingTop: StatusBar.currentHeight, paddingBottom: 50 }}>
        <AppBar />
        <MainStack />
      </View>
    );
  }
}
