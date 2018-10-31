import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import likeIcon from "../assets/like_icon.png";
import commentIcon from "../assets/comment_icon.png";
import dmIcon from "../assets/dm_icon.png";

export default class Insta extends Component {
  constructor() {
    super();
    this.state = {
      ifLiked: false
    };
  }

  likePicture = () => {
    this.setState({ ifLiked: !this.state.ifLiked });
  };

pictureLiked = this.state.ifLiked ? "red" : null;

  render() {
    return (
      <View>
        <View style={styles.appBar}>
          <Text>Instagram</Text>
        </View>

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
              uri: "https://picsum.photos/600/?random"
            }}
          />

          <View style={styles.pictureActionBar}>
            <Image source={likeIcon} style={styles.likeAction} />
            <Image source={commentIcon} style={styles.pictureAction} />
            <Image source={dmIcon} style={styles.pictureAction} />
          </View>
        </TouchableOpacity>
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
  },
  likeAction: {
    height: 28,
    width: 28,
    margin: 10,
    tintColor: this.pictureLiked
  }
});
