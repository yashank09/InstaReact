import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class AppBar extends Component {
  render() {
    return (
      <View>
        <View style={styles.appBar}>
          <Text>Instagram</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    appBar: {
      height: 50,
      borderBottomColor: "#d7dbe2",
      borderBottomWidth: StyleSheet.hairlineWidth,
      alignItems: "center",
      justifyContent: "center"
    }
})