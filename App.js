import React, { Component } from "react";
import { View, StatusBar, ActivityIndicator } from "react-native";

import { createSwitchNavigator } from "react-navigation";

import AppBar from "./components/AppBar";
import Login from "./components/Login";
import {StackNavigator} from "./components/StackNavigator";

class UserLogged extends Component {
  constructor(props) {
    super(props);
    this.checkUserLogged();
  }
  checkUserLogged = async () => {
    const userLoggedIn = false;
    this.props.navigation.navigate(userLoggedIn? "MainApp": "Login")
  };
  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}

const MainStack = createSwitchNavigator({
  checkUser: UserLogged,
  MainApp: StackNavigator,
  Login: Login
});

export default class App extends Component {
  render() {
    return (
      <View style={{ paddingTop: StatusBar.currentHeight, paddingBottom: 50 }}>
        <AppBar />
        <MainStack />
      </View>
    );
  }
}
