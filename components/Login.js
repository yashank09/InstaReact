import React, { Component } from "react";
import { Button } from "react-native";

export default class Login extends Component {
loginUser = () => {
    this.props.navigation.navigate("feed");
}

  render() {
    return <Button title={"Login"} onPress={this.loginUser}/>;
  }
}
