import React, { Component } from "react";
import { Button } from "react-native";

export default class Login extends Component {
  constructor(props){
    super(props);
  }

  loginUser = () => {
    this.props.navigation.navigate("MainApp");
  }

 render() {
    return <Button title={"Login"} onPress={this.loginUser}/>;
  }
}
