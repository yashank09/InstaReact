import React from "react";
import { View, StatusBar } from "react-native";

import {
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

import AppBar from "./components/AppBar";
import Login from "./components/Login";
import PicCard from "./components/PicCard";
import Profile from "./components/Profile";
import UploadPic from "./components/UploadPic";

const MainStack = createSwitchNavigator({
  Login: { screen: Login },
  MainApp: { screen: TabStack }
});

const TabStack = createBottomTabNavigator({
  Profile: { screen: Profile },
  Feed: { screen: PicCard },
  Upload: { screen: UploadPic }
});

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
