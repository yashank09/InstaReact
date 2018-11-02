import React from "react";
import { View, StatusBar } from "react-native";

import Insta from "./components/PicCard";
import AppBar from "./components/AppBar";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ paddingTop: StatusBar.currentHeight, paddingBottom: 50 }}>
        <AppBar />
        <Insta />
      </View>
    );
  }
}
