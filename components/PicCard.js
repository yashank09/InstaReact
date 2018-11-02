import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import data from "../assets/data.json";

import likeIcon from "../assets/like_icon.png";
import commentIcon from "../assets/comment_icon.png";
import dmIcon from "../assets/dm_icon.png";
import { ScrollView } from "react-native-gesture-handler";

export default class Insta extends Component {
  constructor() {
    super();
    this.state = {
      ifLiked: false
    };
  }

  lastTap = null;
  likePicture = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 200;
    if (this.lastTap && now - this.lastTap < DOUBLE_PRESS_DELAY) {
      this.setState({ ifLiked: !this.state.ifLiked });
    } else {
      this.lastTap = now;
    }
  };

  render() {
    const pictureLiked = this.state.ifLiked ? "red" : null;
    return (
      <ScrollView>
        {data.data.map(i => (
          <View style={styles.mainContainer} key={i.id}>
            <View style={styles.userBar}>
              <View style={styles.userInfo}>
                <Image
                  style={styles.userPic}
                  source={{
                    uri: "https://picsum.photos/50/?random"
                  }}
                />

                <View>
                  <Text>User Name</Text>
                  <Text>Location</Text>
                </View>
              </View>

              <View style={styles.options}>
                <Text>...</Text>
              </View>
            </View>

            <TouchableOpacity activeOpacity={0.3} onPress={this.likePicture}>
              <Image
                style={{ width: 100 + "%", height: 420 }}
                source={{
                  uri: "https://picsum.photos/500/?random"
                }}
              />
            </TouchableOpacity>

            <View style={styles.pictureActionBar}>
              <Image
                source={likeIcon}
                style={{
                  height: 28,
                  width: 28,
                  margin: 10,
                  tintColor: pictureLiked
                }}
              />
              <Image source={commentIcon} style={styles.pictureAction} />
              <Image source={dmIcon} style={styles.pictureAction} />
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 18
  },
  userBar: {
    flexDirection: "row",
    height: 60,
    borderBottomColor: "#d7dbe2",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "space-between"
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center"
  },
  userPic: {
    width: 45,
    height: 45,
    borderRadius: 35,
    marginLeft: 10,
    marginRight: 10
  },
  options: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10
  },
  pictureActionBar: {
    height: 42,
    flexDirection: "row",
    borderBottomColor: "#d7dbe2",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  pictureAction: {
    height: 28,
    width: 28,
    margin: 10
  }
});
